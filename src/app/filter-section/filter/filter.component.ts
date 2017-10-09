import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { VenueVM } from '../venue.vm';
import { ArtistVM } from '../artist.vm';
import { LocationVM } from '../location.vm';

@Component({
  selector: 'lilo-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnDestroy {

  @Input()
  venues: Array<VenueVM>;

  @Input()
  artists: Array<ArtistVM>;

  @Input()
  locations: Array<LocationVM>;

  @Output()
  searchChange = new EventEmitter<string>();

  searchFor: FormControl = new FormControl();
  formSubs: Subscription[] = [];

  constructor() {
    this.formSubs.push(
      this.searchFor.valueChanges
        .subscribe(n => this.searchChange.emit(n))
    );
  }

  ngOnDestroy() {
    this.formSubs.forEach(sub => sub.unsubscribe());
  }

  locationName(l: LocationVM) {
    return l.city + (l.state ? ', ' + l.state : '');
  }
}
