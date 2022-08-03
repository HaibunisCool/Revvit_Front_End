import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingNavComponent } from './landing-nav/landing-nav.component';
import { LandingSectionTwoComponent } from './pages/landing-page/landing-section-two/landing-section-two.component';
import { LandingSvgComponent } from './pages/landing-page/landing-comp/landing-svg/landing-svg.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    LandingNavComponent,
    LandingSectionTwoComponent,
    LandingSvgComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
