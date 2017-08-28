import { Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';
import {Router} from '@angular/router';

import {LoadService} from '../../services/load.service';
import {LoadItem} from '../../models/load-item';

@Component({
    selector: 'posts',
    templateUrl: './app/components/posts/posts.component.html',
})

export class PostsComponent implements OnInit  {

    posts: Post[];
    selectedPost: Post;
    error: any;
    data: LoadItem;

    constructor(private router: Router, private postService: PostService, private loadService: LoadService ) {}
    getPosts() {
        this.postService.getPosts().then(posts => this.posts = posts);
    }
    ngOnInit() {
           this.getPosts();
           this.getTags();
    }
    onSelect(post: Post) {
        if (this.selectedPost !== post) {
            this.selectedPost = post
        } else {
            this.selectedPost = null
        }
    }

    gotoDetail() {
        this.router.navigate(['/posts', this.selectedPost._id]);
    }

    addPost() {
        this.selectedPost = null;
        this.router.navigate(['/posts', 'new']);
    }

    deletePost(post: Post, event: any) {
        event.stopPropagation();
        this.postService
            .delete(post)
            .then(() => {
                this.posts = this.posts.filter(p => p !== post);
                if (this.selectedPost === post) {
                    this.selectedPost = null;
                }
            })
            .catch((error: any) => this.error = error);
    }
    getTags(){
        this.data=this.loadService.getComponent('tags');

    }
}
