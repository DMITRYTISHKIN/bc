import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectService } from './project.service';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  exports: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectComponent
  ]
})
export class ProjectModule { }
