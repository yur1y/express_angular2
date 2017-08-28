import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { PostsComponent }      from './components/posts/posts.component';
import { PostDetailComponent }  from './components/postDetail/post-detail.component';
import {PostsByTagsComponent} from './components/postsByTags/posts-by-tags.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/tags/:tag',
    component: PostsByTagsComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, {
    useHash: true //  https://stackoverflow.com/questions/44752091/how-to-tell-express-to-serve-a-particular-angular-page
});
