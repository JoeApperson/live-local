import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { VenueVM } from '../venue.vm';
import { ArtistVM } from '../artist.vm';
import { LocationVM } from '../location.vm';
import { BaseSmartComponent } from '../../shared/base-smart.component';

@Component({
  selector: 'lilo-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent extends BaseSmartComponent {

  @Input()
  venues: Array<VenueVM>;

  @Input()
  artists: Array<ArtistVM>;

  @Input()
  locations: Array<LocationVM>;

  @Output()
  searchChange = new EventEmitter<string>();

  searchFor: FormControl = new FormControl();

  constructor() {
    super();

    this.addSubscription(
      this.searchFor.valueChanges
        .debounceTime(500)
        .distinctUntilChanged()
        .subscribe(s => this.searchChange.emit(s))
    );
  }

  locationName(l: LocationVM) {
    return l.city + (l.state ? ', ' + l.state : '');
  }
}
