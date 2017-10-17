import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisDayViewComponent } from './this-day-view.component';
import { TodaysHappeningsComponent } from './todays-happenings/todays-happenings.component';
import { TodaysLimaComponent } from './todays-lima/todays-lima.component';
import { MockStore } from '../store/mockStore';
import { ApplicationState, INITIAL_APPLICATION_STATE } from '../store/appState';
import { Store } from '@ngrx/store';

describe('ThisDayViewComponent', () => {
  let component: ThisDayViewComponent;
  let fixture: ComponentFixture<ThisDayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ThisDayViewComponent,
        TodaysHappeningsComponent,
        TodaysLimaComponent
      ],
      providers: [
        { provide: Store,
          useValue: new MockStore<ApplicationState>(INITIAL_APPLICATION_STATE)
        }
      ]
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
