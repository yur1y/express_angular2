import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { PostsComponent }      from './components/posts/posts.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { PostDetailComponent }  from './components/postDetail/post-detail.component';

import { PostService }  from './services/post.service';
import {AngularMaterialModule} from './ngMaterial.module';
import {LoadService} from './services/load.service';
import {ComponentLoader} from './components/core/load.component';
import {LoadDirective} from './directives/load.directive';
import {PostsTagsComponent} from './components/postsTags/posts-tags.component';
import {PostsByTagsComponent} from './components/postsByTags/posts-by-tags.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    AngularMaterialModule,
    ],
  declarations: [
    AppComponent,
    PostsComponent,
    DashboardComponent,
    PostDetailComponent,

      ComponentLoader,

      LoadDirective,
    PostsTagsComponent,
      PostsByTagsComponent
  ],
  entryComponents:[
      PostsTagsComponent
  ],
  providers: [
    PostService,
    LoadService

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
