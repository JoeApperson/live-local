import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AllRegionData } from '../shared/to/all-region-data';

@Injectable()
export class HappeningsService {

  constructor(private http: Http) { }

  // There is only one region for now (DC), but there might be others in the future.
  getHappenings(region: string): Observable<AllRegionData> {

    // TODO: Get this from a REST endpoint like /api/happenings?region=DC
    return this.http.get('/assets/happenings.json')
      .map(response => response.json());
  }
}
