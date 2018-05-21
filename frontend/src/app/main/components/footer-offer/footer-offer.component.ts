import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'bc-footer-offer',
  templateUrl: './footer-offer.component.html',
  styleUrls: ['./footer-offer.component.scss']
})
export class FooterOfferComponent implements OnInit {

  constructor(
    public dialog: NgxSmartModalService
  ) { }

  ngOnInit() {
  }

}
