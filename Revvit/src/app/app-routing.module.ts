import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageModule } from './landing-page/landing-page.module';
import { LandingPageComponent } from './landing-page/pages/landing-page/landing-page.component';

const routes: Routes = [{
  path: '',
  component: LandingPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
