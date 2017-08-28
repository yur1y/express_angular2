import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';
import {LoadService} from '../../services/load.service';
import {LoadItem} from '../../models/load-item';

@Component({
    selector: 'posts-by-tags',
    templateUrl: './app/components//postsByTags/posts-by-tags.component.html'
})

export class PostsByTagsComponent implements OnInit {
    posts:Post[];
    tag:string;
    tags:LoadItem;
    constructor(private postService:PostService,private router:Router,private loadService:LoadService) {
    }

    ngOnInit() {
       this.getPostsByTags();
this.getTags();
    }

    getPostsByTags( ){
        this.tag=window.location.href.substr(window.location.href.lastIndexOf('/')+1);
        this.postService.postsByTag(this.tag).then(data=>this.posts=data)
    }
    gotoPost(id) {
        this.router.navigate(['/posts', id]);
    }
    goBack(){
        this.router.navigate(['/posts'])
    }
    postsByTag(tag: string) {
        this.router.navigate(['/posts/tags',tag]);
    }

    getTags(){
        this.tags=this.loadService.getComponent('tags');
    }
}
