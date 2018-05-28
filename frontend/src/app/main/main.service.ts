import { Injectable } from '@angular/core';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { map, filter, delay } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

import { Project, ResponseData } from './main.model';

@Injectable()
export class MainService {
  private _data = [
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    },
    {
      NAME: "sadsadas",
      SECTION: "adsadq asdasd",
      PREVIEW_IMAGE: "assets/images/project-1.jpg",
    },
    {
      NAME: "jgfhfggf",
      SECTION: "vcxbfvdcb dfgdfg",
      PREVIEW_IMAGE: "assets/images/project-2.jpg",
    }
  ]

  private _data$: BehaviorSubject<ResponseData> = new BehaviorSubject<ResponseData>(null);
  public data$: Observable<ResponseData> = this._data$
    .asObservable().pipe(
      filter(item => item !== null),
      delay(3000)
    );

  public fetchData(page: number = 1, per: number = 12) {
    let begin = (page * per + 1) - per;
    let end = begin + per;
    let data = <HttpResponse<ResponseData>>{
      body: {
        data: this._data.slice(begin, end),
        totalCount: this._data.length
      }
    }
    this._data$.next(data.body)
  }

  constructor() { }
}
