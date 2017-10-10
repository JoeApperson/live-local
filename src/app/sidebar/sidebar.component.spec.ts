import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { Store } from '@ngrx/store';
import { MockStore } from '../store/mockStore';
import { ApplicationState } from '../store/appState';
import { INITIAL_STORE_DATA } from '../store/storeData';
import { UiState } from '../store/uiState';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {

    const UI_STATE: UiState = { currentRegionId: 'LA', searchTerm: undefined, userId: undefined };

    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      providers: [
        { provide: Store,
          useValue: new MockStore<ApplicationState>({ storeData: INITIAL_STORE_DATA, uiState: UI_STATE })
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
