import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ProjectComponent } from './project.component';

const routes: Routes = [
  // { path: '', component: ProjectComponent },
];

export const ProjectRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
