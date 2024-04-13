import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthUserRoutingModule } from './auth-user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { CreateEditBlogComponent } from './create-edit-blog/create-edit-blog.component';
import { BlogDetailsComponent } from '../../shared/components/blog-details/blog-details.component';

// import ext library
import { QuillModule } from 'ngx-quill';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [ProfileComponent, ListBlogsComponent, CreateEditBlogComponent],
  imports: [
    CommonModule,
    AuthUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BlogDetailsComponent,
    // import ext library
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'],

          [{ header: 1 }, { header: 2 }], // custom button values
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
          [{ direction: 'rtl' }], // text direction

          [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],

          ['clean'], // remove formatting button

          ['link', 'image', 'video'], // link and image, video
        ],
      },
    }),
    NgxSkeletonLoaderModule,
  ],
})
export class AuthUserModule {}
