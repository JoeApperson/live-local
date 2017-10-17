import { Action } from '@ngrx/store';
import { keyBy, keys, values } from 'lodash';
import * as moment from 'moment';

import {
  LoadThisDaysShowsAction,
  REGION_HAPPENINGS_LOADED_ACTION, RegionHappeningsLoadedAction, SEARCH_HAPPENINGS_ACTION, SearchHappeningsAction,
  THIS_DAYS_SHOWS_LOADED_ACTION, ThisDaysShowsLoadedAction
} from '../actions';
import { INITIAL_STORE_DATA, StoreData } from '../storeData';
import { Happening } from '../../../shared/models/happening';

export function reduceStoreData(state: StoreData = INITIAL_STORE_DATA, action: Action): StoreData {
  switch (action.type) {
    case SEARCH_HAPPENINGS_ACTION:
      return handleSearchHappeningsAction(state, <SearchHappeningsAction>action);
    case REGION_HAPPENINGS_LOADED_ACTION:
      return handleRegionHappeningsLoadedAction(state, <RegionHappeningsLoadedAction>action);
    case THIS_DAYS_SHOWS_LOADED_ACTION:
      return handleThisDaysShowsLoadedAction(state, <ThisDaysShowsLoadedAction>action);
    default:
      return state;
  }
}

export function handleRegionHappeningsLoadedAction(state: StoreData, action: RegionHappeningsLoadedAction): StoreData {
  const data = action.payload;
  const currentDate = moment();

  // If no data was loaded
  if (!data || !data.happenings) {
    return Object.assign({}, state, INITIAL_STORE_DATA);
  }

  // Build an object map of the current and future happenings
  const happenings = data.happenings.filter((h) =>
    (currentDate.isSameOrBefore(h.showDate, 'date')) ||
    (h.showEndDate && currentDate.isSameOrBefore(h.showEndDate, 'date')));

  return Object.assign({}, state, {
    happenings: keyBy(happenings, 'id'),
    visibleHappenings: happenings.map(h => h.id)
  });
}

export function handleSearchHappeningsAction(state: StoreData, action: SearchHappeningsAction): StoreData {
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

export function handleThisDaysShowsLoadedAction(state: StoreData, action: ThisDaysShowsLoadedAction): StoreData {
  const data = action.payload;
  const currentDate = moment();

  // If no data was loaded
  if (!data || !data.response.docs) {
    return Object.assign({}, state, { limaShows: {} });
  }

  return Object.assign({}, state, { limaShows: data.response.docs });
}

