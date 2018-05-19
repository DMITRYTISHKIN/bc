import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
 // { path: 'section', loadChildren: './section/section.module#SectionModule' },
  // { path: 'project', loadChildren: './project/project.module#ProjectModule' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
