import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappeningSectionComponent } from './happening-section.component';
import { HappeningCardComponent } from './happening-card/happening-card.component';
import { HappeningListComponent } from './happening-list/happening-list.component';
import { Store } from '@ngrx/store';
import { MockStore } from '../store/mockStore';
import { ApplicationState } from '../store/appState';
import { INITIAL_STORE_DATA } from '../store/storeData';
import { INITIAL_UI_STATE } from '../store/uiState';

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
          useValue: new MockStore<ApplicationState>({ storeData: INITIAL_STORE_DATA, uiState: INITIAL_UI_STATE })
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
});
