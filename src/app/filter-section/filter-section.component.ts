import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { VenueVM } from './venue.vm';
import { LocationVM } from './location.vm';
import { ArtistVM } from './artist.vm';
import { ApplicationState } from '../store/appState';
import { SearchHappeningsAction } from '../store/actions';

@Component({
  selector: 'lilo-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent implements OnInit {

  artists$: Observable<Array<ArtistVM>>;
  locations$: Observable<Array<LocationVM>>;
  venues$: Observable<Array<VenueVM>>;

  constructor(public store: Store<ApplicationState>) {

    // TODO: Replace these with store selectors
    this.artists$ = Observable.of([
      { id: 0, name: 'Any' },
      { id: 1, name: 'Donna the Buffalo' }
    ]);

    this.locations$ = Observable.of([
      { id: 0, city: 'Any', state: undefined },
      { id: 1, city: 'Washington', state: 'DC' }
    ]);

    this.venues$ = Observable.of([
      { id: 0, name: 'Any', locationId: 0 },
      { id: 1, name: '9:30 Club, Washington, DC', locationId: 1 }
    ]);

  }

  ngOnInit() { }

  searchChanged(term: string) {
    this.store.dispatch(new SearchHappeningsAction(term));
  }
}
