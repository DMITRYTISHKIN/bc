import { Component, OnInit, EventEmitter } from '@angular/core';

import { News, ResponseData } from './news.model';
import { NewsService } from './news.service'
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public data: News[];
  public totalCount: BehaviorSubject<number> = new BehaviorSubject(null);
  public currentPage: number = 1;
  public isLoading: boolean = true;

  constructor(
    public service: NewsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.currentPage = +this._route.snapshot.paramMap.get('page') || 1;
    this.service.fetchData(this.currentPage);
    this.service.data$.subscribe((data: ResponseData) => {
      if (!this.data) {
        this.totalCount.next(+data.totalCount);
      }

      this.data = data.data;
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });

    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLoading = true;
      this.currentPage = +this._route.snapshot.paramMap.get('page') || 1;
      this.service.fetchData(this.currentPage);
    })
  }

  public goTo(page: number): void {
    this._router.navigate(['/news', { page: page }]);
  }
}
