import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HappeningCardComponent } from './happening-section/happening-card/happening-card.component';
import { HappeningSectionComponent } from './happening-section/happening-section.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HappeningListComponent } from './happening-section/happening-list/happening-list.component';
import { Store } from '@ngrx/store';
import { MockStore } from './store/mockStore';
import { HappeningsService } from './services/happenings.service';
import { HttpModule } from '@angular/http';
import { INITIAL_UI_STATE } from './store/uiState';
import { INITIAL_STORE_DATA } from './store/storeData';
import { ApplicationState } from './store/appState';
import { FilterComponent } from './filter-section/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  const APP_TITLE = 'Live Local';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
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
        },
        HappeningsService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
  }));

  it(`should have as title ${APP_TITLE}`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual(APP_TITLE);
    });
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Live Local');
    });
  }));
});
