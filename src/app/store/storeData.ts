import { Action } from '@ngrx/store';
import { keyBy } from 'lodash';

import { LOAD_REGION_HAPPENINGS_ACTION, LoadRegionHappeningsAction } from './actions';
import { Happening } from '../shared/models/happening';

export interface StoreData {
  // An object map, keyed by happening id.
  happenings: { [key: number]: Happening };
}

const INITIAL_STORE_DATA: StoreData = {
  happenings: {}
};

export function reduceStoreData(state: StoreData = INITIAL_STORE_DATA, action: Action): StoreData {
  switch (action.type) {
    case LOAD_REGION_HAPPENINGS_ACTION:
      return handleLoadRegionHappeningsAction(state, <LoadRegionHappeningsAction>action);
    default:
      return state;
  }
}

function handleLoadRegionHappeningsAction(state: StoreData, action: LoadRegionHappeningsAction): StoreData {
  const regionalData = action.payload;

  return Object.assign({}, state, {
    happenings: keyBy(regionalData .happenings, 'id')
  });
}
