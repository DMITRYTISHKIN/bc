import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOfferComponent } from './footer-offer.component';

describe('FooterOfferComponent', () => {
  let component: FooterOfferComponent;
  let fixture: ComponentFixture<FooterOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
