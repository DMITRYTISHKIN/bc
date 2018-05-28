import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'page/:page', component: MainComponent },
  { path: 'section/:section/page/:page', component: MainComponent },
  { path: 'theme/:theme/page/:page', component: MainComponent },
  { path: 'section/:section/theme/:theme/page/:page', component: MainComponent }
];

export const MainRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
