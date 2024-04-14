import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../../../core/services/data.service';
import { AuthService } from '../../../core/services/auth.service';
import { loginUser } from '../../../core/interfaces/users.interface';

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
    private apiService: DataService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      const payload: loginUser = {
        email: form.value.email,
        password: form.value.password,
      };
      this.apiService.userLogin(payload).subscribe((data: any) => {
        this.authService.saveUser(data);
        this.router.navigate(['/dashboard']);
      });
    }
  }

  getErrorMessage(field: string) {
    if (this.loginForm.get([field])?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.get([field])?.hasError('email') ? 'Not a valid email' : '';
  }
}
