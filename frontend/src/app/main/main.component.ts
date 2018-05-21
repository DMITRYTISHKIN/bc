import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
declare var $: any;

@Component({
  selector: 'bc-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements AfterViewInit {

  public selectSection
  public selectTheme

  public areas = [
    {
      ID: 'e4r43rwer',
      NAME: 'sdfsd dsadsa'
    },
    {
      ID: 'yt5ey43twr',
      NAME: 'xzcxzc xczc'
    },
    {
      ID: 't45t4wetr4w',
      NAME: 'shgfh regrfd'
    },
    {
      ID: 'er43rewr',
      NAME: 'shgfh regrfd hher fde fgef e wfegfswg edsgf'
    },
    {
      ID: '43t5rqw',
      NAME: 'shgfh ewrv regrfd'
    },
    {
      ID: '235r32wer',
      NAME: 'shgfh  dfdsf regrfd'
    }
  ]

  public themes = [
    {
      ID: 'e4r43rwer',
      NAME: 'sdfsd dsadsa'
    },
    {
      ID: 'yt5ey43twr',
      NAME: 'xzcxzc xczc'
    },
    {
      ID: 't45t4wetr4w',
      NAME: 'shgfh regrfd'
    },
    {
      ID: 'er43rewr',
      NAME: 'shgfh regrfd hher'
    },
    {
      ID: '43t5rqw',
      NAME: 'shgfh ewrv regrfd'
    },
    {
      ID: '235r32wer',
      NAME: 'shgfh  dfdsf regrfd'
    }
  ]

  public data = [
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

  constructor() { }

  ngAfterViewInit() {

    let container = $('.projects-container').imagesLoaded(() => {
      container.masonry({
        itemSelector: '.projects-item',
        horizontalOrder: true,
        columnWidth: 390
      })
    })
  }

}
