import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-blobs',
  templateUrl: './list-blogs.component.html',
  styleUrl: './list-blogs.component.scss',
})
export class ListBlogsComponent {
  faIcons: any = {
    faHeart,
  };

  constructor(public router: Router) {}
}
