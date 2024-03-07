import { Component, OnInit } from '@angular/core';
// import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import Quill from 'quill';

@Component({
  selector: 'app-create-edit-blog',
  templateUrl: './create-edit-blog.component.html',
  styleUrl: './create-edit-blog.component.scss',
})
export class CreateEditBlogComponent implements OnInit {
  public blogContent: any = {};
  public blogTitle: string = '';
  public blogStatus: any = '';
  public blogObject: any = {};
  public showModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  saveBlog() {
    const obj = {
      title: this.blogTitle,
      content: this.blogContent,
      status: !this.blogStatus,
    };
    console.log('obj', obj);
  }

  toggleModal() {
    this.blogObject = {
      title: this.blogTitle,
      content: this.blogContent,
      status: !this.blogStatus,
    };
    this.showModal = !this.showModal;
  }
}
