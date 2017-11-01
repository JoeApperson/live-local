import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { values } from 'lodash';
import * as moment from 'moment';

import { BaseSmartComponent } from '../common/base-smart.component';
import { HappeningVM } from '../happening-section/happening.vm';
import { ApplicationState } from '../store/appState';
import { Happening } from '../../shared/models/happening';
import { LoadThisDaysShowsAction, SelectRegionAction } from '../store/actions';
import { mapHappeningToHappeningSummary } from '../happening-section/stateToHappeningSummary';
import { stateToTodaysLimaShowsSelector } from './stateToTodaysLimaShows';


@Component({
  selector: 'lilo-this-day-view',
  templateUrl: './this-day-view.component.html',
  styleUrls: ['./this-day-view.component.scss']
})
export class ThisDayViewComponent extends BaseSmartComponent implements OnInit {
  today: moment.Moment;

  happenings$: Observable<HappeningVM[]> = Observable.empty();
  limaShows$: Observable<any> = Observable.empty();

  constructor(private store: Store<ApplicationState>) {
    super();
    this.today = moment().startOf('day');
  }

  ngOnInit() {
    this.happenings$ = this.store.select(this.stateToTodaysHappeningsSelector);
    this.limaShows$ = this.store.select(stateToTodaysLimaShowsSelector);

    const DEFAULT_REGION = 'DC';
    this.store.dispatch(new SelectRegionAction(DEFAULT_REGION));
    this.store.dispatch(new LoadThisDaysShowsAction());
  }

  private stateToTodaysHappeningsSelector(state: ApplicationState): HappeningVM[] {
    let happenings = values<Happening>(state.storeData.happenings);
    happenings = happenings.filter(h => moment().startOf('day').isSame(h.showDate, 'date'));
    return happenings.map(mapHappeningToHappeningSummary);
  }
}
