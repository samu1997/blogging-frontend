import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private toastData = signal({ type: '', message: '' });
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
