import { Injectable } from '@angular/core';
import { of, BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, filter, delay } from 'rxjs/operators';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { ThemeItem, Project, ResponseData } from './main.model';

const URL = 'http://brandclick.dmitrytishkin.ru';

@Injectable()
export class MainService {

  private _data$: BehaviorSubject<ResponseData> = new BehaviorSubject(null);
  public data$: Observable<ResponseData> = this._data$
    .asObservable().pipe(
      filter(item => item !== null)
    );

  private _themes$: BehaviorSubject<ThemeItem[]> = new BehaviorSubject(null);
  public themes$: Observable<ThemeItem[]> = this._themes$
  .asObservable().pipe(
    filter(item => item !== null)
  );

  public fetchThemes(id_section?: string) {
    let url;

    if (id_section) {
      url = `${URL}/api/themesContain?aggregate={"$section":"${id_section}"}`;
    } else {
      url = `${URL}/api/themesContainAll`;
    }

    this._http.get(url)
      .subscribe((resp: any) => {
        let data = resp._items.map((item) => {
          return <ThemeItem>{
            ID: item.theme[0]._id,
            NAME: item.theme[0].NAME
          }
        });

        let _sections = [
          {
            ID: undefined,
            NAME: 'Все cпециализации',
          },
          ...data
        ];

        this._themes$.next(_sections);
      })
  }

  public fetchData(page: number = 1, section?: string, theme?: string, search?: string) {
    let url
    if (search) {
      url = `${URL}/api/search?aggregate={"$textSearch":"${search}"}&page=${page}&max_results=15`;
    } else if (section || theme) {
      let where = {}
      if (section) {
        where[`SECTION_ID`] = section
      }
      if (theme) {
        where[`THEME_ID`] = theme
      }

      url = `${URL}/api/projects?where=${JSON.stringify(where)}&embedded={"THEME_ID":1,"SECTION_ID":1}&max_results=15&page=${page}`;
    } else {
      url = `${URL}/api/projects?embedded={"THEME_ID":1,%20"SECTION_ID":%201}&max_results=15&page=${page}`;
    }

    this._http.get(url)
      .subscribe((resp: any) => {
        let data = resp._items.map((item) => {
          return <Project>{
            ID: item._id,
            NAME: item.NAME,
            ARTICLE: item.ARTICLE,
            NOTE: item.NOTE,
            DESCRIPTION: item.DESCRIPTION,
            IMAGES: item.IMAGES,
            PREVIEW_IMAGE: item.PREVIEW_IMAGE,
            SECTION_ID: item.SECTION_ID._id,
            NAME_SECTION: item.SECTION_ID.NAME,
            THEME_ID: item.THEME_ID._id,
            NAME_THEME: item.THEME_ID.NAME
          }
        });

        this._data$.next({
          totalCount: resp._meta ? resp._meta.total : 0,
          items: data
        });
      }, () => {
        this._data$.next({
          totalCount: 0,
          items: []
        });
      });
  }

  public resetData(): void {
    this._data$.next(null);
  }

  constructor(
    private _http: HttpClient
  ) { }
}
