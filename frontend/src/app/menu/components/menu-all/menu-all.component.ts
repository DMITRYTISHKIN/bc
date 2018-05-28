import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bc-menu-all',
  templateUrl: './menu-all.component.html',
  styleUrls: ['./menu-all.component.scss'],
})
export class MenuAllComponent implements OnInit {

  @Input() data = []

  constructor() { }

  ngOnInit() {
  }

}
