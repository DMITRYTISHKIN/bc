import { Component, OnInit, ViewEncapsulation, ViewChildren, ElementRef,
  QueryList, Renderer2, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { NgxSmartModalService } from 'ngx-smart-modal';
import { MenuService, MenuItem, DirectionItem } from '../../../menu';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'bc-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class SuggestComponent implements OnInit, AfterViewInit {

  @ViewChildren('suggestButton') public suggestButtons: QueryList<ElementRef>;

  public currentData = {
    data: []
  };
  public data = {
    production: [],
    promotion: []
  }

  private _destroy: Subject<void> = new Subject();

  constructor(
    public dialog: NgxSmartModalService,
    public menuService: MenuService,
    private _r: Renderer2,
    private _dt: ChangeDetectorRef
  ) { }

  ngOnDestroy() {
    this._destroy.next()
  }

  ngOnInit() {
    $('.suggest-slider').slick({
      dots: true,
      fade: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 5000
    });

    this.menuService.dataAll$.pipe(
      takeUntil(this._destroy)
    ).subscribe((data) => {
      this.data.production = data[0].ITEMS.slice(0, 11);
      this.data.promotion = data[1].ITEMS.slice(0, 6)
      this.setActiveDirection(this.suggestButtons.first.nativeElement, 'production');
    });
  }

  ngAfterViewInit() {
    this.setActiveDirection(this.suggestButtons.first.nativeElement, 'production');
  }

  public setActiveDirection(target: HTMLElement, name: string): void {
    setTimeout(() => {
      this.currentData.data = this.data[name];
    });

    this.suggestButtons.forEach((button: ElementRef) => {
      this._r.removeClass(button.nativeElement, 'active')
    });

    this._r.addClass(target, 'active');

  }

}
