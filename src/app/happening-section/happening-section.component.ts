import { Component, OnInit } from '@angular/core';
import { HappeningVM } from './happening.vm';
import { Observable } from 'rxjs/Observable';
import { ApplicationState } from '../store/appState';
import { Store } from '@ngrx/store';
import { values } from 'lodash';

import { SelectHappeningAction, SelectRegionAction } from '../store/actions';
import { stateToHappeningSummariesSelector, stateToVisibleHappeningsSelector } from './stateToHappeningSummary';

@Component({
  selector: 'lilo-happening-section',
  templateUrl: './happening-section.component.html',
  styleUrls: ['./happening-section.component.css']
})
export class HappeningSectionComponent implements OnInit {

  happenings$: Observable<HappeningVM[]> = Observable.empty();
  visibleHappenings$: Observable<Array<number>>;
  selectedID$: Observable<number>;

  // TODO: Get this from the store
  isLoading$: Observable<boolean> = Observable.of(false);

  happeningsToShow: HappeningVM[] = [];

  constructor(private store: Store<ApplicationState>) {
    this.happenings$ = store.select(stateToHappeningSummariesSelector);
    this.visibleHappenings$ = store.select(stateToVisibleHappeningsSelector);
    this.selectedID$ = store.select(state => state.uiState.selectedHappeningID);

    // This is an observable of visibleHappenings$ that filters happenings$ so only those matching the user's filter
    // conditions are included on the happenings list.
    this.visibleHappenings$.combineLatest(
      this.happenings$,
      (visible, happenings) => {
        return happenings.filter(h => visible.indexOf(h.id) > -1);
      }
    ).subscribe(h => this.happeningsToShow = h);

  }

  ngOnInit() {
    const DEFAULT_REGION = 'DC';
    this.store.dispatch(new SelectRegionAction(DEFAULT_REGION));
  }

  selectHappening(happening: HappeningVM) {
    this.store.dispatch(new SelectHappeningAction(happening));
  }
}
