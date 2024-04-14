import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularBlogsComponent } from '../popular-blogs/popular-blogs.component';

import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, PopularBlogsComponent, QuillModule],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent implements OnInit {
  @Input() blogDetail?: object;
  @Input() isPreview?: boolean = false;
  public author: string = 'John Doe';

  constructor() {}

  ngOnInit(): void {
    if (!this.blogDetail) {
      this.blogDetail = {
        title: 'The Majestic and Wonderful Bahamas',
        content:
          '{"ops":[{"attributes":{"color":"#000000","bold":true},"insert":"Introduction"},{"attributes":{"align":"justify","header":1},"insert":"\\n"},{"attributes":{"color":"#000000"},"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna. Proin bibendum urna mattis ante malesuada ultrices. Etiam in turpis vitae elit dictum aliquet. Donec mattis risus in turpis dapibus, eget tempus sem tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In est enim, imperdiet sed ornare quis, pellentesque vel risus. Nunc vitae vestibulum turpis. Quisque eget eleifend urna. Etiam et vulputate purus, ut egestas sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis quis neque non urna venenatis mollis et at massa. Pellentesque sem lacus, malesuada vel hendrerit molestie, mollis vel elit."},{"attributes":{"align":"justify"},"insert":"\\n\\n"},{"attributes":{"color":"#000000","bold":true},"insert":"Heading"},{"attributes":{"align":"justify","header":1},"insert":"\\n"},{"attributes":{"color":"#000000"},"insert":"Vivamus nec facilisis elit, quis congue justo. In non augue ex. Aenean pretium facilisis hendrerit. Sed sed imperdiet dui. Etiam faucibus a diam sed vehicula. Nullam commodo lacus tincidunt, tincidunt orci sed, dapibus leo. Vivamus vulputate quis risus a ultricies. Aliquam luctus id tellus non condimentum. Aenean maximus viverra ipsum eget vestibulum. Morbi ut tincidunt sem, efficitur volutpat tortor. Donec scelerisque, ipsum eu efficitur semper, neque turpis sodales quam, in aliquam elit lacus varius lorem. Ut ut diam id leo efficitur malesuada eget in velit. Pellentesque tristique orci nunc, vitae fermentum nibh luctus eu. Mauris condimentum justo sed ipsum egestas varius."},{"attributes":{"align":"justify"},"insert":"\\n"},{"attributes":{"color":"#000000"},"insert":"Sed sagittis odio a volutpat feugiat. Cras aliquam varius justo, a rhoncus ante bibendum id. Nulla maximus nisl sed enim maximus, ut dictum lectus hendrerit. Fusce venenatis tincidunt eros. Phasellus quis augue vulputate ipsum pellentesque fringilla. Morbi nec tempor felis. Maecenas sollicitudin pellentesque dui, sit amet scelerisque mauris elementum nec. Cras ante metus, mattis in malesuada in, fermentum a nunc. Suspendisse potenti. Sed tempor lacus sed commodo dignissim. Quisque dictum, dolor auctor iaculis cursus, ipsum urna porttitor ex, sed consequat nisi tellus eget ante. Duis molestie mollis eros, eu sollicitudin mauris lobortis quis."},{"attributes":{"align":"justify"},"insert":"\\n"},{"attributes":{"color":"#000000"},"insert":"Vivamus sed neque nec massa scelerisque imperdiet eget id sapien. Fusce elementum mi id malesuada luctus. Proin quis lorem id leo porta interdum non ac nisl. Integer nulla sem, ultrices sed neque eget, blandit condimentum metus. Aliquam eget malesuada sapien. Curabitur aliquet orci sit amet ex tincidunt convallis. Mauris urna mi, consequat mattis mollis a, dignissim eget sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam facilisis sem diam, viverra consequat metus consequat vel. Cras a mi eu ex luctus malesuada quis eu ante. Aliquam erat volutpat."},{"attributes":{"align":"justify"},"insert":"\\n\\n"},{"attributes":{"color":"#000000","bold":true},"insert":"Conclusion"},{"attributes":{"align":"justify","header":1},"insert":"\\n"},{"attributes":{"color":"#000000"},"insert":"Donec vulputate auctor leo lobortis congue. Sed elementum pharetra turpis. Nulla at condimentum odio. Vestibulum ullamcorper enim eget porttitor bibendum. Proin eros nibh, maximus vitae nisi a, blandit ultricies lectus. Vivamus eu maximus lacus. Maecenas imperdiet iaculis neque, vitae efficitur felis vestibulum sagittis. Nunc a eros aliquet, egestas tortor hendrerit, posuere diam. Proin laoreet, ligula non eleifend bibendum, orci nulla luctus ipsum, dignissim convallis quam dolor et nulla."},{"attributes":{"align":"justify"},"insert":"\\n"},{"insert":"\\n"}]}',
        status: true,
      };
    }
  }
}
