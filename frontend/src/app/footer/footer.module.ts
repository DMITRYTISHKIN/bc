import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer.component';
import { FooterOfferComponent } from './components/footer-offer/footer-offer.component';
import { FooterSliderComponent } from './components/footer-slider/footer-slider.component';
import { FooterAboutComponent } from './components/footer-about/footer-about.component';
import { FooterContactsComponent } from './components/footer-contacts/footer-contacts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent
  ],
  declarations: [
    FooterComponent,
    FooterOfferComponent,
    FooterSliderComponent,
    FooterAboutComponent,
    FooterContactsComponent
  ]
})
export class FooterModule { }
