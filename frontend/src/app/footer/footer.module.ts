import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer.component';
import { FooterAboutComponent } from './components/footer-about/footer-about.component';
import { FooterContactsComponent } from './components/footer-contacts/footer-contacts.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent
  ],
  declarations: [
    FooterComponent,
    FooterAboutComponent,
    FooterContactsComponent
  ]
})
export class FooterModule { }
