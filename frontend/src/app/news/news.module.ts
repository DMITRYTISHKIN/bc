import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsService } from './news.service'
import { PaginatorModule } from '@shared/paginator';


@NgModule({
  exports: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    MomentModule,
    NewsRoutingModule,
    PaginatorModule
  ],
  declarations: [
    NewsComponent
  ], providers: [
    NewsService
  ]
})
export class NewsModule { }
