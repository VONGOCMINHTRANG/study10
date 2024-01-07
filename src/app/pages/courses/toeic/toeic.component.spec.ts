import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToeicComponent } from './toeic.component';

describe('ToeicComponent', () => {
  let component: ToeicComponent;
  let fixture: ComponentFixture<ToeicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToeicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToeicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
