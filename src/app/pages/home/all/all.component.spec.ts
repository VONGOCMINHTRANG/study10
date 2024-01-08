import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHomeContentComponent } from './all.component';

describe('AllHomeContentComponent', () => {
  let component: AllHomeContentComponent;
  let fixture: ComponentFixture<AllHomeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllHomeContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllHomeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
