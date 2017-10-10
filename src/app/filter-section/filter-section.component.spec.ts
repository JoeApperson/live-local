import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSectionComponent } from './filter-section.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockStore } from '../store/mockStore';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/appState';
import { INITIAL_STORE_DATA } from '../store/storeData';
import { INITIAL_UI_STATE } from '../store/uiState';

describe('FilterSectionComponent', () => {
  let component: FilterSectionComponent;
  let fixture: ComponentFixture<FilterSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [FilterSectionComponent, FilterComponent],
      providers: [
        { provide: Store,
          useValue: new MockStore<ApplicationState>({ storeData: INITIAL_STORE_DATA, uiState: INITIAL_UI_STATE })
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
