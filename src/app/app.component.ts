import { Component, effect } from '@angular/core';

import { SharedService } from './core/services/shared.service';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blogging-app';

  constructor(
    private sharedService: SharedService,
    private toastr: ToastrService,
  ) {
    effect(() => {
      const effectData = this.sharedService.getToastData();
      const data = effectData();
      switch (data.type) {
        case 'success':
          this.toastr.success('Success', data.message, { progressBar: true });
          break;

        case 'danger':
          this.toastr.error('Error', data.message, { progressBar: true });
          break;

        case 'warning':
          this.toastr.warning('Warning', data.message, { progressBar: true });
          break;

        default:
          this.toastr.clear();
          break;
      }
    });
  }
}
