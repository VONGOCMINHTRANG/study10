import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingTermsComponent } from './buying-terms.component';

describe('BuyingTermsComponent', () => {
  let component: BuyingTermsComponent;
  let fixture: ComponentFixture<BuyingTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyingTermsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyingTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
