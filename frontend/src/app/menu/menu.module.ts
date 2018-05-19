import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxPopperModule } from 'ngx-popper';

import { MenuComponent } from './menu.component';
import { MenuAllComponent } from './components/menu-all/menu-all.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

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
    BrowserModule,
    NgxPopperModule
  ],
  providers: [],
})
export class MenuModule { }
