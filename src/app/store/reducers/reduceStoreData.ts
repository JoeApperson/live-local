import { Action } from '@ngrx/store';
import { keyBy } from 'lodash';
import * as moment from 'moment';

import { LOAD_REGION_HAPPENINGS_ACTION, LoadRegionHappeningsAction } from '../actions';
import { INITIAL_STORE_DATA, StoreData } from '../storeData';

export function reduceStoreData(state: StoreData = INITIAL_STORE_DATA, action: Action): StoreData {
  switch (action.type) {
    case LOAD_REGION_HAPPENINGS_ACTION:
      return handleLoadRegionHappeningsAction(state, <LoadRegionHappeningsAction>action);
    default:
      return state;
  }
}

function handleLoadRegionHappeningsAction(state: StoreData, action: LoadRegionHappeningsAction): StoreData {
  const data = action.payload;
  const currentDate = moment();

  const happenings = data.happenings.filter((h) =>
    (currentDate.isSameOrBefore(h.showDate, 'date')) ||
    (h.showEndDate && currentDate.isSameOrBefore(h.showEndDate, 'date')));

  return Object.assign({}, state, {
    happenings: keyBy(happenings, 'id')
  });
}
