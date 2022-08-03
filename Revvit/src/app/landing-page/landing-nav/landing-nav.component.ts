import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-nav',
  templateUrl: './landing-nav.component.html',
  styleUrls: ['./landing-nav.component.scss']
})
export class LandingNavComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  hamClick($event: any) {
    let clickedElement = document.querySelector('.ham');


    console.log(clickedElement)


        clickedElement!.classList.toggle('active');
  }

  goToLogin(){
    this.route.navigateByUrl("/login");

  }

  goToSignup(){
    this.route.navigateByUrl("/signup");

  }

  goToFAQ(){
    
  }


}
