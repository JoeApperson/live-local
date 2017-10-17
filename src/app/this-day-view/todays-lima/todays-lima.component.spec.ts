import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysLimaComponent } from './todays-lima.component';

describe('TodaysLimaComponent', () => {
  let component: TodaysLimaComponent;
  let fixture: ComponentFixture<TodaysLimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysLimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysLimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
