import {  Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  constructor(public router: Router) { }

  // toggle: boolean;
  
  login: boolean;
  signup:boolean;

  ngOnInit(): void {
    if(this.router.url ==='/login'){
      this.login = true;
    } 
    if (this.router.url ==='/signup'){
      this.signup = true;
    }

  }
  
  switchView(): void{
    if(this.router.url==='/login'){
      this.router.navigateByUrl('/signup')
    } else {
      this.router.navigateByUrl('/login');
    }
    this.login = !this.login;
    this.signup = !this.signup;
  }

}
