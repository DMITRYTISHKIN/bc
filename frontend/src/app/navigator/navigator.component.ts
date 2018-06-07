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
          if (activeRoute.length > 0) {
            return;
          }

          let name = this.getName(item);

          if (activeRoute.length && Boolean(name)) {
            let path = `${activeRoute[activeRoute.length - 1]}/${item}`;

            if (Boolean(name)) {
              activeRoute.push({
                NAME: name,
                ROUTE: path
              });
            }
          } else if (Boolean(name)) {
            if (Boolean(name)) {
              activeRoute.push({
                NAME: name,
                ROUTE: item
              });
            }
          }
        });

      this.activeRoute = activeRoute;
      window.scrollTo(0, 0);
    })
  }


  public getName(route: string): string {
    let key: any = route.match(/(.*);/);

    if (key) {
      key = key[1]
    } else {
      key = route
    }

    switch (key) {
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
      case 'project':
        return 'Проект'
      case 'page':
        return 'Проекты'
      case 'section':
        return 'Проекты'
      case 'search':
        return 'Поиск'
    }
  }
}
