import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageModule } from './landing-page/landing-page.module';
import { FaqPageComponent } from './landing-page/pages/faq-page/faq-page.component';
import { LandingPageComponent } from './landing-page/pages/landing-page/landing-page.component';

const routes: Routes = [{
  path: '',
  component: LandingPageComponent
},
{
  path: 'faqs',
  component: FaqPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
