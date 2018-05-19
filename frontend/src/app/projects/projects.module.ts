import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [
    ProjectsComponent
  ],
  declarations: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
