import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToLogin(){
    this.route.navigateByUrl("/login");

  }

  goToSignup(){
    this.route.navigateByUrl("/signup");

  }

}
