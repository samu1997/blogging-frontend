import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../core/services/data.service';
import { getProfileData, Users } from '../../../core/interfaces/users.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  public profileData: unknown;
  public showModal: boolean = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProfile().subscribe((data: getProfileData) => {
      if (data.status) {
        this.profileData = data.data;
      }
    });
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
