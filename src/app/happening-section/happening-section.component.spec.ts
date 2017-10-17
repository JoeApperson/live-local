import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappeningSectionComponent } from './happening-section.component';
import { HappeningCardComponent } from './happening-card/happening-card.component';
import { HappeningListComponent } from './happening-list/happening-list.component';
import { Store } from '@ngrx/store';
import { MockStore } from '../store/mockStore';
import { ApplicationState, INITIAL_APPLICATION_STATE } from '../store/appState';
import { StoreData } from '../store/storeData';
import { INITIAL_UI_STATE } from '../store/uiState';
import { stateToHappeningSummariesSelector } from './stateToHappeningSummary';

describe('HappeningSectionComponent', () => {
  let component: HappeningSectionComponent;
  let fixture: ComponentFixture<HappeningSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HappeningSectionComponent,
        HappeningListComponent,
        HappeningCardComponent
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
    fixture = TestBed.createComponent(HappeningSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map storeData to view model', () => {
    const storeData: StoreData = {
      happenings: {
        1000: {
          id: 1000,
          showDate: '2018-04-22',
          showEndDate: null,
          eventName: 'The Weepies',
          venueName: '9:30 Club, Washington, DC',
          ticketPrices: 'TBD',
          showTime: '7pm',
          featuring: null
        },
        1001: {
          id: 1001,
          showDate: '2018-04-25',
          showEndDate: null,
          eventName: 'Jayme Stone\'s Folklife',
          venueName: 'Barns of Rose Hill, Berryville, VA',
          ticketPrices: '15',
          showTime: '8pm',
          featuring: null
        }
      },
      visibleHappenings: [],
      limaShows: {}
    };

    const state = {
      uiState: INITIAL_UI_STATE,
      router: undefined,
      storeData
    };

    const vm = stateToHappeningSummariesSelector(state);
    expect(vm.length).toEqual(2);
    expect(vm[0].ticketPrices).toEqual('TBD');
    expect(vm[1].ticketPrices).toEqual('$15.00');
  });
});
