import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { LiMaService } from '../../services/li-ma.service';
import { ErrorOccurredAction, LOAD_THIS_DAYS_SHOWS_ACTION, ThisDaysShowsLoadedAction } from '../actions';
import { LOAD_LIMA_ERROR_NOTICE } from '../../common/error-notices';

@Injectable()
export class LoadLiMaEffectService {

  constructor(private actions$: Actions, private svc: LiMaService) { }
  @Effect()
  limaShowsRequested$: Observable<Action> = this.actions$
    .ofType(LOAD_THIS_DAYS_SHOWS_ACTION)
    .switchMap(action => this.svc.getShowsForThisDay()
      .map(data => new ThisDaysShowsLoadedAction(data)))
      .catch((err) => Observable.of(new ErrorOccurredAction(LOAD_LIMA_ERROR_NOTICE, err.message)));
}
