import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { ReactiveFormsModule } from '@angular/forms';

const exports: any[] = [AuthPageComponent];


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: exports
})
export class AuthModule { }
