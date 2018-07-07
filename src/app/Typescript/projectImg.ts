export class Image {
  link: string;
  project: string;
  datafilter: any;
}

export const project1: Image[] = [
  { link: 'assets/images/11.jpg', project: 'Project1', datafilter: 'pro1'},
  { link: 'assets/images/12.jpg', project: 'Project1', datafilter: 'pro1'},
  { link: 'assets/images/13.jpg', project: 'Project1', datafilter: 'pro1'},
];
export const project2: Image[] = [
  { link: 'assets/images/21.jpg', project: 'Project2', datafilter: 'pro2'},
  { link: 'assets/images/22.jpg', project: 'Project2', datafilter: 'pro2'},
  { link: 'assets/images/23.png', project: 'Project2', datafilter: 'pro2'},
];
export const project3: Image[] = [
  { link: 'assets/images/31.jpg', project: 'Project3', datafilter: 'pro3'},
  { link: 'assets/images/32.png', project: 'Project3', datafilter: 'pro3'},
  { link: 'assets/images/33.jpg', project: 'Project3', datafilter: 'pro3'},
];
export const ImageDict = {
  all: project1.concat(project2, project3),
  project1: project1,
  project2: project2,
  project3: project3,
};
