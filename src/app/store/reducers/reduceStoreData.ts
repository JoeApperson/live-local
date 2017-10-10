import { Action } from '@ngrx/store';
import { keyBy, keys, values } from 'lodash';
import * as moment from 'moment';

import {
  REGION_HAPPENINGS_LOADED_ACTION, RegionHappeningsLoadedAction, SEARCH_HAPPENINGS_ACTION, SearchHappeningsAction
} from '../actions';
import { INITIAL_STORE_DATA, StoreData } from '../storeData';
import { Happening } from '../../shared/models/happening';

export function reduceStoreData(state: StoreData = INITIAL_STORE_DATA, action: Action): StoreData {
  switch (action.type) {
    case SEARCH_HAPPENINGS_ACTION:
      return handleSearchHappeningsAction(state, <SearchHappeningsAction>action);
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
    happenings: keyBy(happenings, 'id'),
    visibleHappenings: happenings.map(h => h.id)
  });
}

function handleSearchHappeningsAction(state: StoreData, action: SearchHappeningsAction): StoreData {
  const newState = Object.assign({}, state);
  const visibleHappenings: Array<number> = [];
  const term = action.searchTerm.toUpperCase();

  values<Happening>(state.happenings).forEach(h => {
    if (!action.searchTerm || action.searchTerm === '') {
      visibleHappenings.push(h.id);
    } else if (h.venueName.toUpperCase().includes(term)) {
      visibleHappenings.push(h.id);
    } else if (h.eventName.toUpperCase().includes(term)) {
      visibleHappenings.push(h.id);
    } else if (h.featuring && h.featuring.toUpperCase().includes(term)) {
      visibleHappenings.push(h.id);
    }
  });

  newState.visibleHappenings = visibleHappenings;
  return newState;
}
