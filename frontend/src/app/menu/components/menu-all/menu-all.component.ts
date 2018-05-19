import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bc-menu-all',
  templateUrl: './menu-all.component.html',
  styleUrls: ['./menu-all.component.css'],
})
export class MenuAllComponent implements OnInit {

  public data = {
    production: [
      'dasdafasd',
      'adsadq sad ad ad',
      'asdsad sdsad dsadsad',
      'sadsad dsadasdsad',
      'asdas dfdhgfdg gfsd fsdfs sdfdsf fsdft',
      'sadsad dsadasdsad adasd',
      'greg fdsfdsf'
    ],
    promotion: [
      'asdsad sdsad dsadsad',
      'sadsad dsadasdsad',
      'asdas dfdhgfdg gfsd'
    ],
    packages: [
      'asdsad sdsad dsadsad',
      'sadsad dsadasdsad dfdsgsd gsfgfsdg sgsdf gsd fdsf dsf sadfsa dsf',
      'asdas dfdhgfdg gfsd'
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
