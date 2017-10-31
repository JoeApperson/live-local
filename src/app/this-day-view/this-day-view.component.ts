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
import { LimaShowVM } from './lima-show.vm';
import { LiMASearchResponseItem } from '../../shared/to/lima-search-results';
import { mapLimaShowToShowSummary } from './stateToLimaShowSummary';


@Component({
  selector: 'lilo-this-day-view',
  templateUrl: './this-day-view.component.html',
  styleUrls: ['./this-day-view.component.css']
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
    this.limaShows$  = this.store.select(this.stateToTodaysLimaShowsSelector);

    const DEFAULT_REGION = 'DC';
    this.store.dispatch(new SelectRegionAction(DEFAULT_REGION));
    this.store.dispatch(new LoadThisDaysShowsAction());
  }

  private stateToTodaysHappeningsSelector(state: ApplicationState): HappeningVM[] {
    let happenings = values<Happening>(state.storeData.happenings);
    happenings = happenings.filter(h => moment().startOf('day').isSame(h.showDate, 'date'));
    return happenings.map(mapHappeningToHappeningSummary);
  }

  private stateToTodaysLimaShowsSelector(state: ApplicationState): LimaShowVM[] {
    const shows = values<LiMASearchResponseItem>(state.storeData.limaShows);
    if (!shows) {
      return [];
    }
    return shows.map(mapLimaShowToShowSummary).sort((a, b) => {
      // sort by rating (desc), num reviews (desc), and title (asc)
      if (!a.rating || a.rating < b.rating) {
        return 1;
      } else if (!b.rating || a.rating > b.rating) {
        return -1;
      } else if (!a.num_reviews || a.num_reviews < b.num_reviews) {
        return 1;
      } else if (!b.num_reviews || a.num_reviews > b.num_reviews) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
