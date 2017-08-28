import { Injectable }           from '@angular/core';

import { LoadItem }               from '../models/load-item';
import {PostService} from './post.service';
import {PostsTagsComponent} from '../components/postsTags/posts-tags.component';

@Injectable()
export class LoadService {

    constructor(private postService:PostService){

 }
  getComponent(componentName:string) {

      switch(componentName){
          case 'tags': return new LoadItem(PostsTagsComponent,  this.postService.distinctTags());
      }

  }
}
