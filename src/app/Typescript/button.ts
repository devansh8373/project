import {text} from '@angular/core/src/render3/instructions';

export class Buttons {
  text: string;
  datafilter: any;
}

export const Button: Buttons[] = [
  { text: 'All', datafilter: 'all'},
  { text: 'Project1', datafilter: 'project1'},
  { text: 'Project2', datafilter: 'project2'},
  { text: 'Project3', datafilter: 'project3'},

];

