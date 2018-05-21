import { Component, ViewEncapsulation } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'bc-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  constructor(
    public dialog: NgxSmartModalService
  ) {}
}
