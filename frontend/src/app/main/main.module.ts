import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FooterOfferComponent } from './components/footer-offer/footer-offer.component';
import { MainRoutingModule } from './main-routing.module';
import { FooterSliderComponent } from './components/footer-slider/footer-slider.component';
import { SuggestComponent } from './components/suggest';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    MainRoutingModule,
    NgxSmartModalModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [
    MainComponent,
    FooterOfferComponent,
    FooterSliderComponent,
    SuggestComponent
  ]
})
export class MainModule { }
