import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Injectable()
export class LiMaService {

  constructor(private http: Http) {
  }

  getShowsForThisDay(): Observable<any> {
    const params = new URLSearchParams();
    const today = moment().startOf('day').format('-MM-DD');
    const paramStr = `title:("${today}") AND collection:(etree)`;
    params.set('q', paramStr);

    return this.http.get('/api/lima-shows?' + params.toString())
      .map(response => response.json());
  }
}
