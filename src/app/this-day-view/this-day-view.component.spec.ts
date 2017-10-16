import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisDayViewComponent } from './this-day-view.component';

describe('ThisDayViewComponent', () => {
  let component: ThisDayViewComponent;
  let fixture: ComponentFixture<ThisDayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisDayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisDayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
