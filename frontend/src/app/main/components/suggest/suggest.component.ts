import { Component, OnInit, ViewEncapsulation, ViewChildren, ElementRef,
  QueryList, Renderer2, AfterViewInit } from '@angular/core';

import { NgxSmartModalService } from 'ngx-smart-modal';

declare var $: any;

@Component({
  selector: 'bc-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class SuggestComponent implements OnInit, AfterViewInit {

  @ViewChildren('suggestButton') public suggestButtons: QueryList<ElementRef>;

  public currentData = {
    data: []
  };
  public data = {
    production: [
      {
        NAME: 'dsadsad sadasd',
        NOTE: 'sadf adsad dafrg fgdsaf sdsaf fewgf dsgfsd fdasfda'
      },
      {
        NAME: 'vcbvc nbcnc',
        NOTE: 'sdafsd fgsdgfdgfsg gfsgfsdg fsgfsgf gfdhdfhgds'
      },
      {
        NAME: 'fgjgfhdhgdfsgdf ggg',
        NOTE: 'fdgfsd gfojig iofsdjgfio sjg sijogj fsogjfsioj gfios giosfjag iohfsg'
      },
      {
        NAME: 'dsadsad sadasd',
        NOTE: 'sadf adsad dafrg fgdsaf sdsaf fewgf dsgfsd fdasfda'
      },
      {
        NAME: 'vcbvc nbcnc',
        NOTE: 'sdafsd fgsdgfdgfsg gfsgfsdg fsgfsgf gfdhdfhgds'
      },
      {
        NAME: 'fgjgfhdhgdfsgdf ggg',
        NOTE: 'fdgfsd gfojig iofsdjgfio sjg sijogj fsogjfsioj gfios giosfjag iohfsg'
      },
      {
        NAME: 'vcbvc nbcnc',
        NOTE: 'sdafsd fgsdgfdgfsg gfsgfsdg fsgfsgf gfdhdfhgds'
      },
      {
        NAME: 'fgjgfhdhgdfsgdf ggg',
        NOTE: 'fdgfsd gfojig iofsdjgfio sjg sijogj fsogjfsioj gfios giosfjag iohfsg'
      },
      {
        NAME: 'vcbvc nbcnc',
        NOTE: 'sdafsd fgsdgfdgfsg gfsgfsdg fsgfsgf gfdhdfhgds'
      },
      {
        NAME: 'fgjgfhdhgdfsgdf ggg',
        NOTE: 'fdgfsd gfojig iofsdjgfio sjg sijogj fsogjfsioj gfios giosfjag iohfsg'
      },
      {
        NAME: 'vcbvc nbcnc',
        NOTE: 'sdafsd fgsdgfdgfsg gfsgfsdg fsgfsgf gfdhdfhgds'
      },
      {
        NAME: 'fgjgfhdhgdfsgdf ggg',
        NOTE: 'fdgfsd gfojig iofsdjgfio sjg sijogj fsogjfsioj gfios giosfjag iohfsg'
      }
    ],
    promotion: [
      {
        NAME: 'fgjgfhdhgdfsgdf ggg',
        NOTE: 'fdgfsd gfojig iofsdjgfio sjg sijogj fsogjfsioj gfios giosfjag iohfsg'
      },
      {
        NAME: 'dsadsad sadasd',
        NOTE: 'sadf adsad dafrg fgdsaf sdsaf fewgf dsgfsd fdasfda'
      },
      {
        NAME: 'fgjgfhdhgdfsgdf ggg',
        NOTE: 'fdgfsd gfojig iofsdjgfio sjg sijogj fsogjfsioj gfios giosfjag iohfsg'
      },
      {
        NAME: 'vcbvc nbcnc',
        NOTE: 'sdafsd fgsdgfdgfsg gfsgfsdg fsgfsgf gfdhdfhgds'
      },

      {
        NAME: 'vcbvc nbcnc',
        NOTE: 'sdafsd fgsdgfdgfsg gfsgfsdg fsgfsgf gfdhdfhgds'
      },
      {
        NAME: 'dsadsad sadasd',
        NOTE: 'sadf adsad dafrg fgdsaf sdsaf fewgf dsgfsd fdasfda'
      }
    ]
  }

  constructor(
    public dialog: NgxSmartModalService,
    private _r: Renderer2
  ) { }

  ngOnInit() {
    $('.suggest-slider').slick({
      dots: true,
      fade: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear'
    });
  }

  ngAfterViewInit() {
    this.setActiveDirection(this.suggestButtons.first.nativeElement, 'production');
  }

  public setActiveDirection(target: HTMLElement, name: string): void {
    setTimeout(() => {
      this.currentData.data = this.data[name];
    });

    this.suggestButtons.forEach((button: ElementRef) => {
      this._r.removeClass(button.nativeElement, 'active')
    });

    this._r.addClass(target, 'active');

  }

}
