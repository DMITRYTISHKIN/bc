import { Injectable } from '@angular/core';
import { of, BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, filter, delay } from 'rxjs/operators';
import { HttpResponse, HttpClient } from '@angular/common/http';

import { Project } from './project.model';

const URL = 'http://brandclick.dmitrytishkin.ru';

@Injectable()
export class ProjectService {
  private _data$: BehaviorSubject<Project> = new BehaviorSubject(null);
  public data$: Observable<Project> = this._data$
    .asObservable().pipe(
      filter(item => item !== null)
    );

  private _projectsSimilar$: BehaviorSubject<Project[]> = new BehaviorSubject(null);
  public projectsSimilar$: Observable<Project[]> = this._projectsSimilar$
    .asObservable().pipe(
      filter(item => item !== null)
    );

  constructor(
    private _http: HttpClient
  ) { }

  fetchSimilar(section_id: string): void {
    this._http.get(`${URL}/api/projectsSimilar?aggregate={"$section":"${section_id}"}`)
      .subscribe((resp: any) => {
        let data: Project[] = resp._items.map((item) => {
          return <Project>{
            NAME: item.NAME,
            ARTICLE: item.ARTICLE,
            NOTE: item.NOTE,
            DESCRIPTION: item.DESCRIPTION,
            IMAGES: item.IMAGES,
            PREVIEW_IMAGE: item.PREVIEW_IMAGE,
            SECTION_ID: item.SECTION_ID,
            NAME_SECTION: item.section[0].NAME,
            THEME_ID: item.THEME_ID,
            NAME_THEME: item.theme[0].NAME,
          };
        });

        this._projectsSimilar$.next(data);
      });
  }

  fetch(project_id: string): void {
    this._http.get(`${URL}/api/projects?embedded={"THEME_ID":1,%20"SECTION_ID":%201}&where={"_id":"${project_id}"}`).pipe(
      filter((resp: any) => resp._items.length !== 0)
    ).subscribe((resp: any) => {
        let item = resp._items[0];
        let data: Project = {
          NAME: item.NAME,
          ARTICLE: item.ARTICLE,
          NOTE: item.NOTE,
          DESCRIPTION: item.DESCRIPTION,
          IMAGES: item.IMAGES,
          PREVIEW_IMAGE: item.PREVIEW_IMAGE,
          SECTION_ID: item.SECTION_ID._id,
          NAME_SECTION: item.SECTION_ID.NAME,
          THEME_ID: item.THEME_ID._id,
          NAME_THEME: item.THEME_ID.NAME,
        };

        this._data$.next(data);

        this.fetchSimilar(data.SECTION_ID);
      });
  }
}
