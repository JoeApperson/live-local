import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { FilterSectionComponent } from '../filter-section/filter-section.component';
import { HappeningSectionComponent } from '../happening-section/happening-section.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HappeningCardComponent } from '../happening-section/happening-card/happening-card.component';
import { HappeningListComponent } from '../happening-section/happening-list/happening-list.component';
import { FilterComponent } from '../filter-section/filter/filter.component';
import { Store } from '@ngrx/store';
import { MockStore } from '../store/mockStore';
import { ApplicationState } from '../store/appState';
import { INITIAL_STORE_DATA } from '../store/storeData';
import { INITIAL_UI_STATE } from '../store/uiState';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [
        HomeComponent,
        FilterSectionComponent,
        FilterComponent,
        HappeningSectionComponent,
        HappeningListComponent,
        HappeningCardComponent,
        SidebarComponent
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
