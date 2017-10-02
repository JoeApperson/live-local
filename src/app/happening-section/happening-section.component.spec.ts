import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappeningSectionComponent } from './happening-section.component';
import { HappeningCardComponent } from '../happening-list/happening-card.component';
import { HappeningListComponent } from '../happening-list/happening-list.component';

describe('HappeningSectionComponent', () => {
  let component: HappeningSectionComponent;
  let fixture: ComponentFixture<HappeningSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HappeningSectionComponent,
        HappeningListComponent,
        HappeningCardComponent
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
