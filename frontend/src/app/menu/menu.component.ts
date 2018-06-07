import { Component, Inject, ViewEncapsulation, ElementRef, ViewChild,
  Renderer2, OnInit } from '@angular/core';
  import { Router } from '@angular/router';

import { MenuService } from './menu.service';
import { MenuItem, GroupItem, DirectionItem } from './menu.model'

@Component({
  selector: 'bc-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  @ViewChild('searchButton') searchButton: ElementRef;
  @ViewChild('searchInputElem') searchInputElem: ElementRef;

  public data: DirectionItem[];
  public dataAll;
  public searchInput;

  constructor (
    public service: MenuService,
    private _router: Router,
    private _renderer: Renderer2
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

  public onSubmit(e): void {
    if (Boolean(this.searchInput)) {
      this._router.navigate([`/search/${this.searchInput}`]);
    }
  }

  public onHoverInput(e): void {
    this._renderer.addClass(this.searchButton.nativeElement, 'active');
  }
  public onLeaveInput(e): void {
    this._renderer.removeClass(this.searchButton.nativeElement, 'active');
  }

  public onHoverButton(e): void {
    let elem = this._renderer.selectRootElement(this.searchInputElem.nativeElement)
    elem.focus();
  }

  public onLeaveSearch(e): void {
    let elem = this._renderer.selectRootElement(this.searchInputElem.nativeElement)
    elem.blur()
  }
}
