import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  title = 'Technologies That I\'ve Worked On';
  Technologies = [
    { 'Tech' : 'RESTful API Integration', 'Descrip' : '8 months work experience', 'icon' : ''},
    { 'Tech' : 'Volley & JSON', 'Descrip' : '8 months work experience', 'icon' : '' },
    {'Tech' : 'UI/UX Developmentt', 'Descrip' : '1 year work experience', 'icon' : ''},
  ];
  constructor() { }

  ngOnInit() {
  }

}
