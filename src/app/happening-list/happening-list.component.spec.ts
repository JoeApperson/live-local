import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappeningListComponent } from './happening-list.component';
import { HappeningCardComponent } from './happening-card.component';

describe('HappeningListComponent', () => {
  let component: HappeningListComponent;
  let fixture: ComponentFixture<HappeningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HappeningListComponent,
        HappeningCardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappeningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
