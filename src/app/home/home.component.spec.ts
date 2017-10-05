import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FilterSectionComponent } from '../filter-section/filter-section.component';
import { HappeningSectionComponent } from '../happening-section/happening-section.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HappeningCardComponent } from '../happening-section/happening-card/happening-card.component';
import { HappeningListComponent } from '../happening-section/happening-list/happening-list.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        FilterSectionComponent,
        HappeningSectionComponent,
        HappeningListComponent,
        HappeningCardComponent,
        SidebarComponent
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
