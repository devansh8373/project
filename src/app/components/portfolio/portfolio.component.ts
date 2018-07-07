import { Component, OnInit } from '@angular/core';
import {Button} from '../../Typescript/button';
import {ImageDict} from '../../Typescript/projectImg';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  BuTTons = Button;
  Img = ImageDict['all'];
  constructor() { }
  ngOnInit() {
  }
  update(filter: string) {
    this.Img = ImageDict[filter];
  }

}
