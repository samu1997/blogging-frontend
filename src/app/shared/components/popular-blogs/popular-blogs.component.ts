import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-blogs',
  standalone: true,
  templateUrl: './popular-blogs.component.html',
  styleUrl: './popular-blogs.component.scss',
})
export class PopularBlogsComponent implements OnInit {
  @Input() author?: string;

  constructor() {}

  ngOnInit(): void {
    console.log('author', this.author);
  }
}
