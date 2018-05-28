import { Component, Inject, ViewEncapsulation, ElementRef, ViewChild,
  Renderer2, OnInit } from '@angular/core';

import { MenuService } from './menu.service';
import { MenuItem, GroupItem, DirectionItem } from './menu.model'

@Component({
  selector: 'bc-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  isOpenSearchInput = false;
  public data: DirectionItem[];
  public dataAll;

  @ViewChild('searchInput') searchInput: ElementRef

  constructor (
    public service: MenuService,
    private _r: Renderer2
  ) {}

  ngOnInit() {
    this.service.fetchSections();

    this.service.data$.subscribe((data: DirectionItem[]) => {
      this.data = data;
      this.dataAll = data.map((direction: DirectionItem) => {
        return {
          ITEMS: direction.GROUPS.reduce((arr, group) => {
            return arr.concat(group.ITEMS);
            }, []),
          NAME: direction.NAME
        };
      });
    });
  }

  public onSearch($event) {
    if (!this.isOpenSearchInput) {
      this.isOpenSearchInput = true;
      this.searchInput.nativeElement.focus();
      let listenerFn = this._r.listen(this.searchInput.nativeElement, 'blur', (e) => {
        if (e.relatedTarget === this._r.selectRootElement('.icon.icon-search')) {
          return;
        }
        listenerFn();
        this.isOpenSearchInput = false;
      })
    }
  }
}
