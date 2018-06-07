import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;

@Component({
  selector: 'bc-footer-slider',
  templateUrl: './footer-slider.component.html',
  styleUrls: ['./footer-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.footer-slider-container').slick({
      dots: false,
      arrows: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      autoplay: true,
      autoplaySpeed: 3000
    });
  }

}
