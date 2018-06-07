import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DirectionItem, MenuItem } from '../../menu.model'
import { Router } from '@angular/router';

@Component({
  selector: 'bc-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  public info: MenuItem;

  @Input() menuSize: number = 60;
  infoSize: number = 40;
  columnCount: number = 2;

  @Input() public data: DirectionItem

  @ViewChild('production') popper: any

  constructor(
    public _router: Router
  ) { }

  ngOnInit() {
    this.infoSize = 100 - this.menuSize;
    if (this.menuSize < 50) {
      this.columnCount = 1
    }
  }

  public onHoverItem(elem) {
    this.info = elem;
  }

  public onShown(event) {
    if (this.data && this.data.GROUPS) {
      this.info = this.data.GROUPS[0].ITEMS[0];
    }
  }

  public onClick(item: MenuItem) {
    if (item.DESCRIPTION) {
      return
    }
    this.popper.hide()
    this._router.navigate([`/section/${item.ID}/page/1`]);
  }

}
