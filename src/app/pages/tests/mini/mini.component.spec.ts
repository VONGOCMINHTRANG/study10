import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniComponent } from './mini.component';

describe('MiniComponent', () => {
  let component: MiniComponent;
  let fixture: ComponentFixture<MiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
