import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesComponent } from './notices.component';
import { ApplicationState, INITIAL_APPLICATION_STATE } from '../store/appState';
import { MockStore } from '../store/mockStore';
import { Store } from '@ngrx/store';

describe('NoticesComponent', () => {
  let component: NoticesComponent;
  let fixture: ComponentFixture<NoticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticesComponent ],
      providers: [
        { provide: Store,
          useValue: new MockStore<ApplicationState>(INITIAL_APPLICATION_STATE)
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be visible if there is a notice', () => {
    component.notice = 'Do not panic. This is only a test!';
    fixture.detectChanges();

    const de = fixture.debugElement.componentInstance;
    expect(de).toBeDefined();
  });

  it('should hide when closed', () => {
    // test for null notice
    component.close();
    fixture.detectChanges();

    const de = fixture.debugElement.componentInstance;
    expect(de).toBeFalsy();
  });
});
