import { Component, Inject, ViewEncapsulation, ElementRef, ViewChild,
  Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'bc-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  isOpenSearchInput = false;

  @ViewChild('searchInput') searchInput: ElementRef

  constructor (
    private _r: Renderer2
  ) {

  }

  ngOnInit() {

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
