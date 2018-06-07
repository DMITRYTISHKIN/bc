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

  public searchInput;

  public sectionName;

  public grid;

  public selectSection
  public selectTheme

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
    this.service.resetData();
    this._destroy.next();
  }

  ngOnInit() {
    this.currentPage = +this._route.snapshot.paramMap.get('page') || 1;
    this.selectSection = this._route.snapshot.paramMap.get('section')
    this.selectTheme = this._route.snapshot.paramMap.get('theme')
    this.searchInput = this._route.snapshot.paramMap.get('search')

    this._setName();

    this.service.fetchData(this.currentPage, this.selectSection, this.selectTheme, this.searchInput);

    this.service.data$.pipe(
      takeUntil(this._destroy)
    ).subscribe((data: ResponseData) => {
      if (!this.data) {
        this.data = data.items;
        this._setName();
      }

      this.totalCount.next(+data.totalCount);

      this.data = data.items;
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
    this.service.fetchThemes(this._route.snapshot.paramMap.get('section'))

    this._router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  public goTo(page: number): void {
    let route = [];
    let section_id = this._route.snapshot.paramMap.get('section');
    let theme_id = this._route.snapshot.paramMap.get('theme');
    let search = this._route.snapshot.paramMap.get('search');

    if (search) {
      route.push(`search/${search}`)
    }

    if (section_id) {
      route.push(`section/${section_id}`)
    }

    if (theme_id) {
      route.push(`theme/${theme_id}`)
    }

    route.push(`/page/${page}`)

    this._router.navigate([route.join('/')]);
  }

  public onSelectArea(e): void {
    if (e && !Boolean(e.ID)) {
      this.selectSection = undefined;
    }

    if (e && e.ID) {
      this._router.navigate([`/section/${e.ID}/page/1`]);
      this.service.fetchThemes(e.ID);
    } else {
      this._router.navigate([`/page/1`]);
      this.service.fetchThemes();
    }


  }

  public onSelectTheme(e): void {
    if (e && !Boolean(e.ID)) {
      this.selectTheme = undefined;
    }

    let section_id = this._route.snapshot.paramMap.get('section');
    if (section_id) {
      if (e && e.ID) {
        this._router.navigate([`/section/${section_id}/theme/${e.ID}/page/1`]);
      } else {
        this._router.navigate([`/section/${section_id}/page/1`]);
      }
    } else if (e && e.ID) {
      this._router.navigate([`/theme/${e.ID}/page/1`]);
    } else {
      this._router.navigate([`/page/1`]);
    }
  }

  public onSubmit(e): void {
    this._router.navigate([`/search/${this.searchInput}`]);
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

  private _setName(): void {
    if (this.searchInput) {
      this.sectionName = `Поиск по запросу ${this.searchInput}`;
    } else if (!this.selectSection && !this.selectTheme && !this._route.snapshot.paramMap.get('page')) {
      this.sectionName = 'Примеры работ';
    } else if (this.selectSection) {
      this.sectionName = this.menuService.getNameSection(this.selectSection) || ' ';
    } else if (this.selectTheme || this.currentPage) {
      this.sectionName = 'Все работы'
    }
  }
}
