import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysHappeningsComponent } from './todays-happenings.component';

describe('TodaysHappeningsComponent', () => {
  let component: TodaysHappeningsComponent;
  let fixture: ComponentFixture<TodaysHappeningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysHappeningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysHappeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
