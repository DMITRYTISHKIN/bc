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
import { PaginatorModule } from '@shared/paginator';
import { MainService } from './main.service';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    MainRoutingModule,
    NgxSmartModalModule,
    PaginatorModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [
    MainComponent,
    FooterOfferComponent,
    FooterSliderComponent,
    SuggestComponent,
    ProjectsComponent
  ], providers: [
    MainService
  ]
})
export class MainModule { }
