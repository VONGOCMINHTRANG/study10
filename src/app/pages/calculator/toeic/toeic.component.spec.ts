import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorToeicComponent } from './toeic.component';

describe('CalculatorToeicComponent', () => {
  let component: CalculatorToeicComponent;
  let fixture: ComponentFixture<CalculatorToeicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorToeicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorToeicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
