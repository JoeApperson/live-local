import { Action } from '@ngrx/store';
import { keyBy } from 'lodash';

import { LOAD_REGION_HAPPENINGS_ACTION, LoadRegionHappeningsAction } from '../actions';
import { HappeningVM } from '../../happening-section/happening.vm';
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
  const currentDate: string = (new Date().toISOString()).split('T')[0];

  const happenings = data.happenings.filter((h) =>
    ((!h.showEndDate || h.showEndDate >= currentDate) && (h.showDate >= currentDate)));

  return Object.assign({}, state, {
    happenings: keyBy(happenings, 'id')
  });
}
