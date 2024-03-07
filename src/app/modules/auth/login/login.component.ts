import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      // true or false
      console.log('Name', form.value.email);
      console.log('Password', form.value.password);
    }
  }

  getErrorMessage(field: string) {
    if (this.loginForm.get([field])?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.get([field])?.hasError('email')
      ? 'Not a valid email'
      : '';
  }
}
