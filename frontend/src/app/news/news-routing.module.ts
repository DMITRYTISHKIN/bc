import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news.component';

const routes: Routes = [
  { path: 'news', component: NewsComponent },
];

export const NewsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
