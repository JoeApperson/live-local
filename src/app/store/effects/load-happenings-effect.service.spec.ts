import { TestBed, inject } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { LoadHappeningsEffectService } from './load-happenings-effect.service';
import { HappeningsService } from '../../services/happenings.service';

describe('LoadHappeningsEffectService', () => {
  const actions: Observable<any> = Observable.empty();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [ MockBackend, BaseRequestOptions ]
        },
        HappeningsService,
        LoadHappeningsEffectService,
        provideMockActions(() => actions)
      ]
    });
  });

  it('should be created', inject([LoadHappeningsEffectService], (service: LoadHappeningsEffectService) => {
    expect(service).toBeTruthy();
  }));
});
