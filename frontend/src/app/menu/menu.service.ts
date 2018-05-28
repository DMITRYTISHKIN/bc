import { Injectable } from '@angular/core';
import { of, BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, filter, delay } from 'rxjs/operators';
import { HttpResponse, HttpClient } from '@angular/common/http';

import { MenuItem, GroupItem, DirectionItem, ResponseData } from './menu.model';

@Injectable()
export class MenuService {


  private _data$: BehaviorSubject<DirectionItem[]> = new BehaviorSubject(null);
  public data$: Observable<DirectionItem[]> = this._data$
    .asObservable().pipe(
      filter(item => item !== null)
    );

  private _dataAll$: BehaviorSubject<DirectionItem[]> = new BehaviorSubject(null);
  public dataAll$: Observable<DirectionItem[]> = this._dataAll$
    .asObservable().pipe(
      filter(item => item !== null)
    );

  private _sections$: BehaviorSubject<MenuItem[]> = new BehaviorSubject(null);
  public sections$: Observable<MenuItem[]> = this._sections$
  .asObservable().pipe(
    filter(item => item !== null)
  );


  public fetchSections() {
    combineLatest(
      this._http.get('http://127.0.0.1:5000/api/directions'),
      this._http.get('http://127.0.0.1:5000/api/groups'),
      this._http.get('http://127.0.0.1:5000/api/sections')
    ).subscribe((resp: any) => {
      // TODO: Перенести на сервер
      let directions = resp[0]._items;
      let groups = resp[1]._items;
      let sections  = resp[2]._items;

      let data: DirectionItem[] = directions.map((direction) => {
        let _groups = groups.filter(group => group.DIRECTION_ID == direction._id)
        _groups = _groups.map((group) => {
          let _items = sections.filter(section => section.GROUP_ID == group._id)
          _items = _items.map((section) => {
            return <MenuItem> {
              ID: section._id,
              NAME: section.NAME,
              NOTE: section.NOTE,
              DESCRIPTION: section.DESCRIPTION
            }
          });

          return <GroupItem> {
            ID: group._id,
            NAME: group.NAME,
            NOTE: group.NOTE,
            DIRECTION_ID: group.DIRECTION_ID,
            ITEMS: _items
          }
        });

        return <DirectionItem> {
          ID: direction._id,
          NAME: direction.NAME,
          GROUPS: _groups
        }
      });

      this._data$.next(data);
      this._sections$.next(sections.filter(section => !Boolean(section.DESCRIPTION)));
    });
  }

  // public fetchData(page: number = 1, per: number = 12) {
  //   let begin = (page * per + 1) - per;
  //   let end = begin + per;
  //   let data = <HttpResponse<ResponseData<MenuItem>>>{
  //     body: {
  //       data: this._data.slice(begin, end),
  //       totalCount: this._data.length
  //     }
  //   }
  //   this._data$.next(data.body)
  // }

  constructor(
    private _http: HttpClient
  ) { }
}
