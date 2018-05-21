import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
];

export const MainRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
