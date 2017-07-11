
import {Injectable} from '@angular/core';

import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Post} from '../models/post';

@Injectable()
export class PostService {

    private postsUrl = 'posts';  // URL to web api

    constructor(private http: Http) { }

    getPosts(): Promise<Post[]> {
        return this.http.get(this.postsUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getPost(id: string) {
        return this.http.get(this.postsUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(post: Post): Promise<Post>  {
        if (post._id) {
            return this.put(post);
        }
        return this.post(post);
    }

    private post(post: Post): Promise<Post> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.postsUrl, JSON.stringify(post), { headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(post: Post) {
        let headers = new Headers({
            'Content-Type': 'application/json'});
        let url = `${this.postsUrl}/${post._id}`;

        return this.http
            .put(url, JSON.stringify(post), {headers})
            .toPromise()
            .then(() => post)
            .catch(this.handleError);
    }

    delete(post: Post) {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        let url = `${this.postsUrl}/${post._id}`;

        return this.http
            .delete(url,  {headers})
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
