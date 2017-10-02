import { TestBed, inject } from '@angular/core/testing';

import { HappeningsService } from './happenings.service';

describe('HappeningsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HappeningsService]
    });
  });

  it('should be created', inject([HappeningsService], (service: HappeningsService) => {
    expect(service).toBeTruthy();
  }));
});
