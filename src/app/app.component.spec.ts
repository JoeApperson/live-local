import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HappeningsViewComponent } from './happenings-view/happenings-view.component';
import { HappeningCardComponent } from './happening-section/happening-card/happening-card.component';
import { HappeningSectionComponent } from './happening-section/happening-section.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HappeningListComponent } from './happening-section/happening-list/happening-list.component';
import { Store } from '@ngrx/store';
import { MockStore } from './store/mockStore';
import { HappeningsService } from './services/happenings.service';
import { HttpModule } from '@angular/http';
import { ApplicationState, INITIAL_APPLICATION_STATE } from './store/appState';
import { FilterComponent } from './filter-section/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar/navbar.component';

describe('AppComponent', () => {
  const APP_TITLE = 'Live Local';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HappeningsViewComponent,
        FilterSectionComponent,
        FilterComponent,
        HappeningSectionComponent,
        HappeningListComponent,
        HappeningCardComponent,
        SidebarComponent,
        NavbarComponent
      ],
      providers: [
        { provide: Store,
          useValue: new MockStore<ApplicationState>(INITIAL_APPLICATION_STATE)
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

  it('should render title in a navbar-brand tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.navbar-brand').textContent).toContain('Live Local');
    });
  }));
});
