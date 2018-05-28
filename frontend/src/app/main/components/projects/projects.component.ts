import { Component, OnInit, AfterViewChecked, ViewEncapsulation, EventEmitter, OnDestroy } from '@angular/core';
declare var $: any;
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators'

import { MainService } from '../../main.service';
import { Project, ResponseData } from '../../main.model';
import { MenuService, MenuItem } from '../../../menu';

@Component({
  selector: 'bc-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit, AfterViewChecked, OnDestroy {

  public grid;

  public selectSection
  public selectTheme

  public areas = [
    {
      ID: 'e4r43rwer',
      NAME: 'sdfsd dsadsa'
    },
    {
      ID: 'yt5ey43twr',
      NAME: 'xzcxzc xczc'
    },
    {
      ID: 't45t4wetr4w',
      NAME: 'shgfh regrfd'
    },
    {
      ID: 'er43rewr',
      NAME: 'shgfh regrfd hher fde fgef e wfegfswg edsgf'
    },
    {
      ID: '43t5rqw',
      NAME: 'shgfh ewrv regrfd'
    },
    {
      ID: '235r32wer',
      NAME: 'shgfh  dfdsf regrfd'
    }
  ]

  public themes = [
    {
      ID: 'e4r43rwer',
      NAME: 'sdfsd dsadsa'
    },
    {
      ID: 'yt5ey43twr',
      NAME: 'xzcxzc xczc'
    },
    {
      ID: 't45t4wetr4w',
      NAME: 'shgfh regrfd'
    },
    {
      ID: 'er43rewr',
      NAME: 'shgfh regrfd hher'
    },
    {
      ID: '43t5rqw',
      NAME: 'shgfh ewrv regrfd'
    },
    {
      ID: '235r32wer',
      NAME: 'shgfh  dfdsf regrfd'
    }
  ]

  public data: Project[];
  public totalCount: BehaviorSubject<number> = new BehaviorSubject(null);
  public currentPage: number = 1;
  public isLoading: boolean = true;

  private _onReloadItems: Subject<void> = new Subject();
  private _destroy: Subject<void> = new Subject();

  ngOnDestroy() {
    this._destroy.next();
  }

  ngOnInit() {
    this.currentPage = +this._route.snapshot.paramMap.get('page') || 1;

    this.service.fetchData(this.currentPage);

    this.service.data$.pipe(
      takeUntil(this._destroy)
    ).subscribe((data: ResponseData) => {
      if (!this.data) {
        this.totalCount.next(+data.totalCount);
        this.data = data.data;
      }

      this.data = data.data;
      this.isLoading = false;

      this._onReloadItems.pipe(
        takeUntil(this._destroy),
        take(1)
      ).subscribe(() => {
        this._refreshLayout();
      });
    }, () => {
      this.isLoading = false;
    });

    this._router.events.pipe(
      takeUntil(this._destroy),
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLoading = true;
      this.currentPage = +this._route.snapshot.paramMap.get('page') || 1;
      this.service.fetchData(this.currentPage, 12);
    });
  }

  ngAfterViewChecked() {
    this._onReloadItems.next();
  }

  constructor(
    public service: MainService,
    public menuService: MenuService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  public goTo(page: number): void {
    this._router.navigate([`/page/${page}`]);
  }

  private _refreshLayout(): void {
    if (this.grid && this.grid.masonry) {
      this.grid.masonry('destroy');
    }

    this.grid = $('.projects-layout');
    this.grid.imagesLoaded(() => {
      this.grid.masonry({
        itemSelector: '.projects-item',
        horizontalOrder: true,
        columnWidth: 390
      })
    })
  }

}
