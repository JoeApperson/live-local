import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { HappeningsService } from '../../services/happenings.service';
import {
  LOAD_REGION_HAPPENINGS_ACTION, LoadRegionHappeningsAction, RegionHappeningsLoadedAction, SELECT_REGION_ACTION,
  SelectRegionAction
} from '../actions';


@Injectable()
export class LoadHappeningsEffectService {

  constructor(private actions$: Actions, private hs: HappeningsService) { }
  @Effect()
  regionHappenings$: Observable<Action> = this.actions$
    .ofType(LOAD_REGION_HAPPENINGS_ACTION)
    .switchMap(action => this.hs.getHappenings((action as LoadRegionHappeningsAction).region))
    .map(data => new RegionHappeningsLoadedAction(data))
    // TODO: Add some error handling
    // .catch((err) => Observable.of(new ErrorOccurredAction(LOAD_USER_THREADS_ERROR_NOTICE, err.message)))
  ;

  @Effect()
  regionSelected$: Observable<Action> = this.actions$
    .ofType(SELECT_REGION_ACTION)
    .map(action => new LoadRegionHappeningsAction((action as SelectRegionAction).region));
}
