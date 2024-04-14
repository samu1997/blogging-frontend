import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../../../core/services/data.service';
import { SharedService } from '../../../core/services/shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private sharedService: SharedService,
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      const payload = {
        first_name: form.value.firstName,
        family_name: form.value.lastName,
        email: form.value.email,
        password: form.value.password,
        mobile: form.value.mobile,
      };
      this.dataService.createUser(payload).subscribe((data: any) => {
        if (data.status) {
          this.sharedService.setToastData({
            type: 'success',
            message: 'Account created successful, please login.',
          });
          this.router.navigate(['/auth/login']);
        }
      });
    }
  }
}
