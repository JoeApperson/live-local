import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LiMaService {

  constructor(private http: Http) {
  }

  getShowsForThisDay(): Observable<any> {
    const params = new URLSearchParams();

    // const thisDay = '-10-24';
    // params.set('title', thisDay);
    // params.set('collection', 'etree');

    const paramStr = 'title:("-10-24") AND collection:(etree)';
    params.set('q', paramStr);

    return this.http.get('/api/lima-shows?' + params.toString())
      .map(response => response.json());
  }
}
