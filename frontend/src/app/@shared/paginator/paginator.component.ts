import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'shared-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: [ './paginator.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnInit {
  // Fired when current page changed
  @Output() changePage: EventEmitter<number> = new EventEmitter();

  @Input() perPage: number;
  @Input() currentPage: number;
  @Input() totalCount: BehaviorSubject<number>;
  @Input() pers: number[] = [9, 18, 30];
  @Input() aroundCount: number = 2;

  public countPages: number;
  public maxButons: number;
  public middleValue: number;
  public pages: number[] = [];
  public onSelectPage: (page: number) => void

  /**
   * Generate left paginator`s dots
   *
   * @readonly
   * @type {number[]}
   * @memberof PaginatorComponent
   */
  public get leftDots(): number[] {
    let leftPages = this.leftPages;

    if (this.currentPage < this.countPages - this.middleValue + 1) {
      let first = leftPages[leftPages.length - 1];
      let last = this.middlePages[0];
      return Array(last - first - 1).fill(0).map((x, i) => first + i + 1);
    } else {
      let first = leftPages[leftPages.length - 1];
      let last = this.rightPages[0];
      return Array(last - first - 1).fill(0).map((x, i) => first + i + 1);
    }
  }

  /**
   * Generate right paginator`s dots
   *
   * @readonly
   * @type {number[]}
   * @memberof PaginatorComponent
   */
  public get rightDots(): number[] {
    let middlePages = this.middlePages;
    let leftPages = this.leftPages;

    if (this.currentPage > this.middleValue) {
      let first = middlePages[middlePages.length - 1];
      let last = this.rightPages[0];
      return Array(last - first - 1).fill(0).map((x, i) => first + i + 1);
    } else {
      let first = leftPages[leftPages.length - 1];
      let last = this.rightPages[0];
      return Array(last - first - 1).fill(0).map((x, i) => first + i + 1);
    }
  }

  /**
   * Generate left paginator`s part
   *
   * @readonly
   * @type {number[]}
   * @memberof PaginatorComponent
   */
  public get leftPages(): number[] {
    if (this.currentPage > this.middleValue) {
      return Array(this.aroundCount)
        .fill(0)
        .map((x, i) => i + 1);
    } else {
      return Array(this.maxButons - this.aroundCount)
        .fill(0)
        .map((x, i) => i + 1);
    }
  }

  /**
   * Generate middle paginator`s part
   *
   * @readonly
   * @type {number[]}
   * @memberof PaginatorComponent
   */
  public get middlePages(): number[] {
    if (
      this.currentPage > Math.ceil(this.maxButons / 2) &&
      this.currentPage < this.countPages - this.middleValue + 1
    ) {
      return Array(this.aroundCount * 2 + 1)
        .fill(this.currentPage - this.aroundCount)
        .map((x, i) => x + i);
    } else {
      return [];
    }
  }

  /**
   * Generate right paginator`s part
   *
   * @readonly
   * @type {number[]}
   * @memberof PaginatorComponent
   */
  public get rightPages(): number[] {
    if (this.currentPage > this.countPages - this.middleValue) {
      return Array(this.maxButons - this.aroundCount)
        .fill(this.countPages)
        .map((x, i) => x - i)
        .reverse();
    } else {
      return Array(this.aroundCount)
        .fill(this.countPages)
        .map((x, i) => x - i)
        .reverse();
    }
  }

  constructor(
    private changeDetection: ChangeDetectorRef
  ) {
    this.onSelectPage = this.selectPage.bind(this);
  }

  ngOnInit() {
    this.totalCount.pipe(
      filter(item => item !== null)
    ).subscribe(this._initVariables.bind(this));
  }

  /**
   * Handler for change select per page
   *
   * @param {string} per
   * @memberof PaginatorComponent
   */
  public onChangePer(per: string): void {
    this.perPage = +per;
    this._initVariables();
  }

  /**
   * Handler for click page
   *
   * @param {MouseEvent} e
   * @param {number} page
   * @memberof PaginatorComponent
   */
  public onClick(e: MouseEvent, page: number): void {
    this.currentPage = page;
    this.changePage.emit(page);
  }

  /**
   * Handler for select page
   *
   * @param {number} page
   * @memberof PaginatorComponent
   */
  public selectPage(page: number): void {
    this.currentPage = page;
    this.changeDetection.markForCheck();
    this.changePage.emit(page);
  }

  /**
   * Initialize paginator`s variables
   *
   * @private
   * @memberof PaginatorComponent
   */
  private _initVariables(): void {
    debugger
    this.countPages = Math.ceil(this.totalCount.getValue() / this.perPage);
    this.pages = Array(this.countPages).fill(0).map((x, i) => i + 1);
    this.maxButons = this.aroundCount * 4 + 1;
    this.middleValue = Math.ceil(this.maxButons / 2);

    if (this.currentPage > this.countPages) {
      this.currentPage = this.countPages;
    }

    this.changeDetection.markForCheck();
  }
}
