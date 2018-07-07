import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  Name = 'About Me';
  Intro = 'I am in the final year of my Engineering in Electronics and Communication. From the last 3 months, ' +
    'I have been working with Civil Machines Technologies Pvt. Ltd. as a Research Developer. ' +
    'I started my career as a graphic designer so as to enter in the Industry & to enhance my skills & later on ' +
    'I switched on to Development Profile & got selected as a Front End Developer. ' +
    'I have worked on various modules & live projects & learned many things from Business ethics to Technical things. \n' +
    'I\'m proud to say that even before graduating I\'m working in the industry.';
  constructor() { }

  ngOnInit() {
  }

}
