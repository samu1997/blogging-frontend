// ng library imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components import
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { PopularBlogsComponent } from '../../shared/components/popular-blogs/popular-blogs.component';

// ext library imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ListBlogsComponent],
  imports: [
    // ng library imports
    CommonModule,
    DashboardRoutingModule,

    PopularBlogsComponent,
    // ext library imports
    FontAwesomeModule,
  ],
})
export class DashboardModule {}
