import { Injectable } from '@angular/core';
import { of, BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, filter, delay } from 'rxjs/operators';
import { HttpResponse, HttpClient } from '@angular/common/http';

import { MenuItem, GroupItem, DirectionItem, ResponseData } from './menu.model';

const URL = 'http://brandclick.dmitrytishkin.ru';

@Injectable()
export class MenuService {
  private _data$: BehaviorSubject<DirectionItem[]> = new BehaviorSubject(null);
  public data$: Observable<DirectionItem[]> = this._data$
    .asObservable().pipe(
      filter(item => item !== null)
    );

  private _dataAll$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  public dataAll$: Observable<any[]> = this._dataAll$
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
      this._http.get(`${URL}/api/directions`),
      this._http.get(`${URL}/api/groups`),
      this._http.get(`${URL}/api/sections`)
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

      this._dataAll$.next(data.map((direction: DirectionItem) => {
        return {
          ITEMS: direction.GROUPS.reduce((arr, group) => {
            return arr.concat(group.ITEMS);
            }, []),
          NAME: direction.NAME
        };
      }));

      this._data$.next(data);

      let _sections = [
        {
          ID: undefined,
          NAME: 'Все творческие области',
        },
        ...sections
      ];

      this._sections$.next(
        _sections
          .filter(section => !Boolean(section.DESCRIPTION))
          .map((section) => {
            return <MenuItem>{
              ID: section._id,
              NAME: section.NAME,
              NOTE: section.NOTE,
              DESCRIPTION: section.DESCRIPTION
            }
          })
      );
    });
  }

  public getNameSection(id_section: string): string {
    let sections = this._sections$.getValue();
    if (id_section && sections) {
      return sections.find(item => item.ID === id_section).NAME;
    } else {
      return ''
    }
  }

  constructor(
    private _http: HttpClient
  ) { }
}
