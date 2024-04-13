import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  public profileData: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProfile().subscribe((data: any) => {
      if (data.status) {
        this.profileData = data.data;
      }
    });
  }
}
