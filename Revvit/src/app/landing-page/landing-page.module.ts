import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingNavComponent } from './landing-nav/landing-nav.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    LandingNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
