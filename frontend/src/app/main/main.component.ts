import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'

import { MainService } from './main.service';
import { Project, ResponseData } from './main.model';

@Component({
  selector: 'bc-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public isMain = false;

  ngOnInit() {
    this.isMain = !Boolean(this._route.snapshot.routeConfig.path);
  }

  constructor(
    private _route: ActivatedRoute,
  ) { }
}
