import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectService } from './project.service';
import { MainService } from '../main/main.service';
import { Project } from './project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [
    ProjectService
  ]
})
export class ProjectComponent implements OnInit {
  public data: Project;

  public loadingSimilar: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _mainService: MainService,
    public service: ProjectService
  ) { }

  ngOnInit() {
    this.service.fetch(this._route.snapshot.paramMap.get('id'))
    this.service.data$.subscribe((data) => {
      this.data = data;
    });

    this.service.projectsSimilar$.subscribe(() => {
      this.loadingSimilar = false;
    })
  }

  public onTop(): void {
    window.scrollTo(0, 0);
  }

  public onClickSimilar(section_id: string): void {
    this.loadingSimilar = true;
    this.service.fetchSimilar(section_id);
  }
}
