import { Action } from '@ngrx/store';
import { keyBy } from 'lodash';
import * as moment from 'moment';

import {
  REGION_HAPPENINGS_LOADED_ACTION, RegionHappeningsLoadedAction
} from '../actions';
import { INITIAL_STORE_DATA, StoreData } from '../storeData';

export function reduceStoreData(state: StoreData = INITIAL_STORE_DATA, action: Action): StoreData {
  switch (action.type) {
    case REGION_HAPPENINGS_LOADED_ACTION:
      return handleRegionHappeningsLoadedAction(state, <RegionHappeningsLoadedAction>action);
    default:
      return state;
  }
}

function handleRegionHappeningsLoadedAction(state: StoreData, action: RegionHappeningsLoadedAction): StoreData {
  const data = action.payload;
  const currentDate = moment();

  const happenings = data.happenings.filter((h) =>
    (currentDate.isSameOrBefore(h.showDate, 'date')) ||
    (h.showEndDate && currentDate.isSameOrBefore(h.showEndDate, 'date')));

  return Object.assign({}, state, {
    happenings: keyBy(happenings, 'id')
  });
}
