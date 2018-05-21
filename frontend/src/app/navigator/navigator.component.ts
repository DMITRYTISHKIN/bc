import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

type route = {
  NAME: string,
  ROUTE: string
}

@Component({
  selector: 'bc-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  public activeRoute: route[] = [];

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let activeRoute = [];

      event.url
        .split('/')
        .filter((item: string) => item.length)
        .forEach((item: string) => {
          if (activeRoute.length) {
            let path = `${activeRoute[activeRoute.length - 1]}/${item}`;
            activeRoute.push({
              NAME: this.getName(item),
              ROUTE: path
            });
          } else {
            activeRoute.push({
              NAME: this.getName(item),
              ROUTE: item
            });
          }
        });

      this.activeRoute = activeRoute;
    })
  }


  public getName(route: string): string {
    switch (route) {
      case 'history':
        return 'История бренда'
      case 'mission':
        return 'Наша миссия'
      case 'news':
        return 'Новости'
      case 'team':
        return 'Команда'
      case 'wishes':
        return 'Пожелания и благодарности'
    }
  }
}
