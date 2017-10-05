import { Component, OnInit } from '@angular/core';
import { HappeningVM } from './happening.vm';
import { Observable } from 'rxjs/Observable';
import { ApplicationState } from '../store/appState';
import { Store } from '@ngrx/store';

import { SelectRegionAction } from '../store/actions';
import { stateToHappeningSummariesSelector } from './stateToHappeningSummary';

@Component({
  selector: 'lilo-happening-section',
  templateUrl: './happening-section.component.html',
  styleUrls: ['./happening-section.component.css']
})
export class HappeningSectionComponent implements OnInit {

  happenings$: Observable<HappeningVM[]> = Observable.empty();

  constructor(private store: Store<ApplicationState>) {
    this.happenings$ = store.select(stateToHappeningSummariesSelector);
  }

  ngOnInit() {
    const DEFAULT_REGION = 'DC';
    this.store.dispatch(new SelectRegionAction(DEFAULT_REGION));
  }

}
