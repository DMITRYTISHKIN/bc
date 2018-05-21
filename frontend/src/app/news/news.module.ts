import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';

@NgModule({
  exports: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  declarations: [
    NewsComponent
  ]
})
export class NewsModule { }
