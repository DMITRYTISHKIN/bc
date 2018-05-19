import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpoilerComponent } from './spoiler.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    SpoilerComponent
  ],
  declarations: [
    SpoilerComponent
  ]
})
export class SpoilerModule { }
