import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AllRegionalData } from '../shared/to/all-regional-data';

@Injectable()
export class HappeningsService {

  constructor(private http: Http) { }

  getHappenings(): Observable<AllRegionalData> {

    // TODO: Get this from an api REST endpoint instead and add error handling
    return this.http.get('/assets/happenings.json')
      .map(response => response.json());
  }
}
