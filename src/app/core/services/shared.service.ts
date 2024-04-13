import { Injectable, signal } from '@angular/core';

const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private toastData = signal({ type: 'notShow', message: '' });
  constructor() {}

  setToastData(update: any) {
    this.toastData.set(update);
  }

  getToastData() {
    return this.toastData;
  }

  clean(): void {
    localStorage.clear();
  }
}
