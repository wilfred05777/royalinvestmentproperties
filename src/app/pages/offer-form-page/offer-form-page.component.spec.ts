import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferFormPageComponent } from './offer-form-page.component';

describe('OfferFormPageComponent', () => {
  let component: OfferFormPageComponent;
  let fixture: ComponentFixture<OfferFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
