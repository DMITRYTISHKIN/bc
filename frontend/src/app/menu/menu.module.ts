import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxPopperModule } from 'ngx-popper';

import { MenuComponent } from './menu.component';
import { MenuAllComponent } from './components/menu-all/menu-all.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuService } from './menu.service';
import { MainRoutingModule } from '../main/main-routing.module';

@NgModule({
  declarations: [
    MenuComponent,
    MenuAllComponent,
    MenuItemComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    MainRoutingModule,
    BrowserModule,
    NgxPopperModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    MenuService
  ],
})
export class MenuModule { }
