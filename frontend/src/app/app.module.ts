import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header';
import { MenuModule } from './menu';
import { FooterModule } from './footer';
import { ProjectModule } from './project';

import { HistoryComponent } from './history';
import { MissionComponent } from './mission';
import { NewsModule } from './news';
import { MainModule } from './main';
import { TeamComponent } from './team';
import { WishesComponent } from './wishes';
import { NavigatorComponent } from './navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HistoryComponent,
    MissionComponent,
    TeamComponent,
    WishesComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MenuModule,
    NewsModule,
    MainModule,
    ProjectModule,
    FooterModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
