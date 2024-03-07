// ng library imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components import
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';

// ext library imports

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgetComponent],
  imports: [
    // ng library imports
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // ext library imports
  ],
  providers: [],
})
export class AuthModule {}
