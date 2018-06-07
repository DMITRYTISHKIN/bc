import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../menu.model'

@Component({
  selector: 'bc-menu-all',
  templateUrl: './menu-all.component.html',
  styleUrls: ['./menu-all.component.scss'],
})
export class MenuAllComponent implements OnInit {

  @ViewChild('all') popper: any

  @Input() data = []

  constructor(
    public _router: Router
  ) { }

  ngOnInit() {
  }

  public onClick(item: MenuItem) {
    if (item.DESCRIPTION) {
      return
    }
    this.popper.hide()
    this._router.navigate([`/section/${item.ID}/page/1`]);
  }

}
