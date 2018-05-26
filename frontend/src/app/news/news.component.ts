import { Component, OnInit } from '@angular/core';

import { News, ResponseData } from './news.model';
import { NewsService } from './news.service'
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public data: News[];
  public totalCount: number = 0;
  public currentPage: number = 1;

  constructor(
    public service: NewsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.currentPage = +this._route.snapshot.paramMap.get('page') || 1;
    this.service.fetchData(this.currentPage);
    this.service.data$.subscribe((data: ResponseData) => {
      this.data = data.data;
      this.totalCount = +data.totalCount;
    })
  }

  public goTo(page: number): void {
    this._router.navigate(['/news', { page: page }]);
    this.service.fetchData(page);
  }
}
