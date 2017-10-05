import { Component, Input, OnInit } from '@angular/core';
import { VenueVM } from '../venue.vm';
import { ArtistVM } from '../artist.vm';
import { LocationVM } from '../location.vm';

@Component({
  selector: 'lilo-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  venues: Array<VenueVM>;

  @Input()
  artists: Array<ArtistVM>;

  @Input()
  locations: Array<LocationVM>;

  constructor() { }

  ngOnInit() {
  }

  locationName(l: LocationVM) {
    return l.city + (l.state ? ', ' + l.state : '');
  }
}
