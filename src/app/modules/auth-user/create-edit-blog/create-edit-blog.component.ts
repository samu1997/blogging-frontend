import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit-blog',
  templateUrl: './create-edit-blog.component.html',
  styleUrl: './create-edit-blog.component.scss',
})
export class CreateEditBlogComponent implements OnInit {
  public blogContent: object = {};
  public blogTitle: string = '';
  public blogStatus: string = '';
  public blogObject: object = {};
  public showModal: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log('');
  }

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
