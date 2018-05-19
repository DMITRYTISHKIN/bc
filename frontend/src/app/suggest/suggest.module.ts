import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestComponent } from './suggest.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SuggestComponent
  ],
  declarations: [
    SuggestComponent
  ]
})
export class SuggestModule { }
