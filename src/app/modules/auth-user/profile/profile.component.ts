import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../../../core/services/data.service';
import { SharedService } from '../../../core/services/shared.service';
import { getProfileData, Users } from '../../../core/interfaces/users.interface';

import moment from 'moment';
import _ from 'lodash';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  public profileForm = new FormGroup({
    first_name: new FormControl(''),
    family_name: new FormControl(''),
    mobile: new FormControl({ value: '', disabled: true }),
    dob: new FormControl(''),
    email: new FormControl(''),
    place: new FormControl(''),
    bio: new FormControl(''),
  });

  public profileData: any | Users = { name: '', email: '' };
  public showModal: boolean = false;
  public age: number = NaN;
  constructor(
    private dataService: DataService,
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.getProfileData();
  }

  async getProfileData() {
    await this.dataService.getProfile().subscribe((data: getProfileData) => {
      if (data.status) {
        this.profileData = data.data;
        this.profileForm = this.formBuilder.group({
          first_name: [this.profileData.first_name, Validators.required],
          family_name: [this.profileData.family_name, Validators.required],
          mobile: [this.profileData.mobile, [Validators.required, Validators.minLength(10)]],
          email: [this.profileData.email, [Validators.required, Validators.email]],
          dob: [this.profileData.dob || '', Validators.nullValidator],
          place: [this.profileData.place || ''],
          bio: [this.profileData.bio || '', Validators.required],
        });

        if (this.profileData.dob) {
          const momentData = moment(this.profileData.dob, 'YYYY-MM-DD').fromNow();
          this.age = parseInt(momentData.split(' ')[0]);
        }
      }
    });
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  async onSubmit(form: FormGroup) {
    if (form.valid) {
      const payload = _.omit(form.value, ['email']);
      this.dataService.updateProfile(payload).subscribe(async (data) => {
        if (data.status) {
          await this.getProfileData();
          this.toggleModal();
          this.sharedService.setToastData({ type: 'success', message: 'updated successful' });
        }
      });
    }
  }

  dobChange(e: any) {
    const momentData = moment(e.target.value, 'YYYY-MM-DD').fromNow();
    this.age = parseInt(momentData.split(' ')[0]);
  }
}
