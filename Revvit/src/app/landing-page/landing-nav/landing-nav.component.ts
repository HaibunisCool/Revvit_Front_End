import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-nav',
  templateUrl: './landing-nav.component.html',
  styleUrls: ['./landing-nav.component.scss']
})
export class LandingNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    hamClick($event: any) {
    let clickedElement = document.querySelector('.ham');


    console.log(clickedElement)


        clickedElement!.classList.toggle('active');
      }

}
