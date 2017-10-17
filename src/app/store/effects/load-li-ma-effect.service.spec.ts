import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http, HttpModule } from '@angular/http';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { LoadLiMaEffectService } from './load-li-ma-effect.service';
import { LiMaService } from '../../services/li-ma.service';

describe('LoadLiMaEffectService', () => {
  const actions: Observable<any> = Observable.empty(); // TODO: This needs typing

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadLiMaEffectService]
    });


    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        LiMaService,
        LoadLiMaEffectService,
        provideMockActions(() => actions)
      ]
    });
  });

  it('should be created', inject([LoadLiMaEffectService], (service: LoadLiMaEffectService) => {
    expect(service).toBeTruthy();
  }));
});
