import { TestBed, inject } from '@angular/core/testing';

import { LoadHappeningsEffectService } from './load-happenings-effect.service';

describe('LoadHappeningsEffectServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadHappeningsEffectService]
    });
  });

  it('should be created', inject([LoadHappeningsEffectService], (service: LoadHappeningsEffectService) => {
    expect(service).toBeTruthy();
  }));
});
