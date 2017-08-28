import {Component,   Input} from '@angular/core';
import {LoadComponent} from '../core/interfaces/load.component';
import {Router} from '@angular/router';

@Component({
    selector: 'posts-tags',
    templateUrl: './app/components/postsTags/posts-tags.component.html'
})

export class PostsTagsComponent implements LoadComponent {

 @Input()   data: any;

    constructor(  private router: Router) {}

    postsByTag(tag: string) {
        this.router.navigate(['/posts/tags']).then(
            ()=>{      this.router.navigate(['/posts/tags',tag])}
        )
  ;
       }

}
