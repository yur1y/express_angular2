
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';

@Component({
    selector: 'dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    posts: Post[] = [];

    constructor(
        private router: Router,
        private postService: PostService) {
    }

    ngOnInit() {
        this.postService.getPosts()
            .then(posts => this.posts = posts);
    }

    gotoDetail(post: Post) {
        let link = ['/posts', post._id];
        this.router.navigate(link);
    }
}
