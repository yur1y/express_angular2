
import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import { ActivatedRoute, Params } from '@angular/router';
import {PostService} from '../../services/post.service';

@Component({
    selector: 'post-detail',
    templateUrl: './app/components/postDetail/post-detail.component.html',

})

export class PostDetailComponent implements OnInit {
    @Input() post: Post;
    newPost = false;
    error: any;
    navigated = false; // true if navigated here

    constructor(
        private postService: PostService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.newPost = true;
                this.post = new Post();
            } else {
                this.newPost = false;
                this.postService.getPost(id)
                    .then(post => this.post = post);
            }
        });
    }

    save() {
        this.postService
            .save(this.post)
            .then(post => {
                this.post = post; // saved post, w/ id if new
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack() {
        window.history.back();
    }
}
