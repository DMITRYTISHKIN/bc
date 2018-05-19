import { Component, OnInit, Input } from '@angular/core';

type MenuItem = {
  NAME: string,
  NOTE: string
}

@Component({
  selector: 'bc-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  public info: MenuItem;

  @Input() menuSize: number = 60;
  infoSize: number = 40;
  columnCount: number = 2;

  @Input() public data = [
    {
      group: 'asdasd',
      items: [
        {
          NAME: 'dsadsad sadasd',
          NOTE: 'sadf adsad dafrg fgdsaf sdsaf fewgf dsgfsd fdasfda'
        },
        {
          NAME: 'vcbvc nbcnc',
          NOTE: `sdafsd fgsdgfdgfsg gfsgfsdg fsgfsgf gfdhdfhgds
            <div>
              <div class="button-download">
              <div class="icon icon-download"></div>Скачать предложение</div>
            </div>
          `
        },
        {
          NAME: 'fgjgfhdhgdfsgdf ggg',
          NOTE: 'fdgfsd gfojig iofsdjgfio sjg sijogj fsogjfsioj gfios giosfjag iohfsg'
        },
        {
          NAME: 'dsadsad sadasd',
          NOTE: 'sadf adsad dafrg fgdsaf sdsaf fewgf dsgfsd fdasfda'
        }
      ]
    },
    {
      group: 'asdasd',
      items: [
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
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
    this.infoSize = 100 - this.menuSize;
    if (this.menuSize < 50) {
      this.columnCount = 1
    }

    if (this.data.length && this.data[0].items.length) {
      this.info = this.data[0].items[0];
    }
  }

  public onHoverItem(elem) {
    this.info = elem;
  }

}
