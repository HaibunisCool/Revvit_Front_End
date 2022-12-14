import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth/auth-page/auth-page.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { FaqPageComponent } from './landing-page/pages/faq-page/faq-page.component';
import { LandingPageComponent } from './landing-page/pages/landing-page/landing-page.component';

const routes: Routes = [{
  path: '',
  component: LandingPageComponent
},
{
  path: 'signup',
  component: AuthPageComponent
},
{
  path: 'login',
  component: AuthPageComponent
},
{
  path: 'faqs',
  component: FaqPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
