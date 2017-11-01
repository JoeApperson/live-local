import { Component, OnInit } from '@angular/core';
import { HappeningVM } from './happening.vm';
import { Observable } from 'rxjs/Observable';
import { ApplicationState } from '../store/appState';
import { Store } from '@ngrx/store';
import { values } from 'lodash';

import { SelectHappeningAction, SelectRegionAction } from '../store/actions';
import { stateToHappeningSummariesSelector, stateToVisibleHappeningsSelector } from './stateToHappeningSummary';
import { BaseSmartComponent } from '../common/base-smart.component';

@Component({
  selector: 'lilo-happening-section',
  templateUrl: './happening-section.component.html',
  styleUrls: ['./happening-section.component.scss']
})
export class HappeningSectionComponent extends BaseSmartComponent implements OnInit {

  happenings$: Observable<HappeningVM[]> = Observable.empty();
  visibleHappenings$: Observable<Array<number>>;
  selectedID$: Observable<number>;
  isLoading$: Observable<boolean>;
  happeningsToShow: HappeningVM[] = [];

  constructor(private store: Store<ApplicationState>) {
    super();
  }

  ngOnInit() {
    const DEFAULT_REGION = 'DC';

    this.happenings$ = this.store.select(stateToHappeningSummariesSelector);
    this.visibleHappenings$ = this.store.select(stateToVisibleHappeningsSelector);
    this.selectedID$ = this.store.select(state => state.uiState.selectedHappeningID);
    this.isLoading$ = this.store.select(state => state.uiState.isDataLoading);

    // This is an observable of visibleHappenings$ that filters happenings$ so only those matching the user's filter
    // conditions are included on the happenings list.
    this.addSubscription(this.visibleHappenings$.combineLatest(
      this.happenings$,
      (visible, happenings) => {
        return happenings.filter(h => visible.indexOf(h.id) > -1);
      }
    ).subscribe(h => this.happeningsToShow = h));

    this.store.dispatch(new SelectRegionAction(DEFAULT_REGION));
  }

  selectHappening(happening: HappeningVM) {
    this.store.dispatch(new SelectHappeningAction(happening));
  }
}
