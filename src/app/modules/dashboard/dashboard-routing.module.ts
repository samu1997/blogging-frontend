import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { BlogDetailsComponent } from '../../shared/components/blog-details/blog-details.component';

const routes: Routes = [
  {
    path: 'articals',
    component: ListBlogsComponent,
  },
  {
    path: 'artical',
    component: BlogDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'articals',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
