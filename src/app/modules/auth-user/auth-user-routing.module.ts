import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { CreateEditBlogComponent } from './create-edit-blog/create-edit-blog.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'blogs',
    component: ListBlogsComponent,
  },
  {
    path: 'create-edit-blog',
    component: CreateEditBlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthUserRoutingModule {}
