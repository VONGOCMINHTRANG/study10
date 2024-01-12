import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorIeltsComponent } from './ielts.component';

describe('CalculatorIeltsComponent', () => {
  let component: CalculatorIeltsComponent;
  let fixture: ComponentFixture<CalculatorIeltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorIeltsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorIeltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
