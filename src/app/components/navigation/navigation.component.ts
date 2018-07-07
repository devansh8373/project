import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  Header = [
    { 'Text' : 'Home' },
    { 'Text' : 'About' },
    { 'Text' : 'Skills' },
    { 'Text' : 'Qualities' },
    { 'Text' : 'Experience' },
    { 'Text' : 'Education' },
    { 'Text' : 'Portfolio' },
    { 'Text' : 'Contact'},
    // { 'Text' : 'Resume', 'class' : 'fa fa-download' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
