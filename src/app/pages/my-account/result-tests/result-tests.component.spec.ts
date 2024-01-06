import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTestsComponent } from './result-tests.component';

describe('ResultTestsComponent', () => {
  let component: ResultTestsComponent;
  let fixture: ComponentFixture<ResultTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultTestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
