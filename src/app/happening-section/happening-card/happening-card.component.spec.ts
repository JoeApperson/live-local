import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappeningCardComponent } from './happening-card.component';

describe('HappeningCardComponent', () => {
  let component: HappeningCardComponent;
  let fixture: ComponentFixture<HappeningCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappeningCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappeningCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
    });
  });
});
