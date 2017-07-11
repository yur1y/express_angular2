
import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';
import { Router } from '@angular/router';

@Component({
    selector: 'posts',
    templateUrl: './app/components/posts/posts.component.html'
})

export class PostsComponent implements OnInit {

    posts: Post[];
    selectedPost: Post;
    error: any;

    constructor(
        private router: Router,
        private postService: PostService) { }
    getPosts() {
        this.postService.getPosts().then(posts => this.posts = posts);
    }
    ngOnInit() {
        this.getPosts();
    }
    onSelect(post: Post) { if (this.selectedPost !== post) { this.selectedPost = post} else {
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
                if (this.selectedPost === post) { this.selectedPost = null; }
            })
            .catch((error: any) => this.error = error);
    }
}
