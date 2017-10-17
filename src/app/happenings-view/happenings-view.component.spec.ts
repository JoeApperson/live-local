import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HappeningsViewComponent } from './happenings-view.component';
import { FilterSectionComponent } from '../filter-section/filter-section.component';
import { HappeningSectionComponent } from '../happening-section/happening-section.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HappeningCardComponent } from '../happening-section/happening-card/happening-card.component';
import { HappeningListComponent } from '../happening-section/happening-list/happening-list.component';
import { FilterComponent } from '../filter-section/filter/filter.component';
import { Store } from '@ngrx/store';
import { MockStore } from '../store/mockStore';
import { ApplicationState, INITIAL_APPLICATION_STATE } from '../store/appState';

describe('HomeComponent', () => {
  let component: HappeningsViewComponent;
  let fixture: ComponentFixture<HappeningsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [
        HappeningsViewComponent,
        FilterSectionComponent,
        FilterComponent,
        HappeningSectionComponent,
        HappeningListComponent,
        HappeningCardComponent,
        SidebarComponent
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
    fixture = TestBed.createComponent(HappeningsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
