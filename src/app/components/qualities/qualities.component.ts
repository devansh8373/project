import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualities',
  templateUrl: './qualities.component.html',
  styleUrls: ['./qualities.component.scss']
})
export class QualitiesComponent implements OnInit {
  quality1 = 'Initiative Taker';
  quality2 = 'Learner';
  quality3 = 'Team Supporter';
  quality4 = 'Personal Management';
  constructor() { }
  ngOnInit() {
  }

}
