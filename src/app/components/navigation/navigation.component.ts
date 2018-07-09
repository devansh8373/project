import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  Header = [
    { 'Text' : 'Home', 'Link' : '#banner' },
    { 'Text' : 'About', 'Link' : '#int'},
    { 'Text' : 'Skills', 'Link' : '#Skills' },
    { 'Text' : 'Qualities', 'Link' : '#qualities'},
    { 'Text' : 'Experience', 'Link' : '#exp'},
    { 'Text' : 'Education', 'Link' : '#education'},
    { 'Text' : 'Portfolio', 'Link' : '#portfolio'},
    { 'Text' : 'Contact', 'Link' : '#contact'}
    // { 'Text' : 'Resume', 'class' : 'fa fa-download' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
