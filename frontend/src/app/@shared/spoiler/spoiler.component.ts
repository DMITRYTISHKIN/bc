import { Component, Input } from '@angular/core';
import { trigger,style,transition,animate,state } from '@angular/animations';

@Component({
  selector: 'shared-spoiler',
  templateUrl: './spoiler.component.html',
  styleUrls: [ './spoiler.component.css' ],
  animations: [
    trigger('spoilerState', [
      state('inactive', style({
        height: 0,
        overflow: 'hidden',
        display: 'none'
      })),
      state('active', style({

      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})
export class SpoilerComponent {
  @Input() spoilerState: string = 'inactive';
}
