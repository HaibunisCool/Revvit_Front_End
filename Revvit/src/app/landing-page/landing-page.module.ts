import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingNavComponent } from './landing-nav/landing-nav.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    LandingNavComponent,
    FaqPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
