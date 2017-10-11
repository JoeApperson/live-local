import { Action } from '@ngrx/store';
import { INITIAL_UI_STATE, UiState } from '../uiState';
import {
  LOAD_REGION_HAPPENINGS_ACTION, REGION_HAPPENINGS_LOADED_ACTION,
  SEARCH_HAPPENINGS_ACTION, SearchHappeningsAction, SELECT_HAPPENING_ACTION, SELECT_REGION_ACTION,
  SelectHappeningAction,
  SelectRegionAction
} from '../actions';

export function reduceUiState(state: UiState = INITIAL_UI_STATE, action: Action): UiState {
  switch (action.type) {
    case LOAD_REGION_HAPPENINGS_ACTION:
      return Object.assign({}, state, { isDataLoading: true });
    case REGION_HAPPENINGS_LOADED_ACTION:
      return Object.assign({}, state, { isDataLoading: false });
    case SELECT_REGION_ACTION:
      return handleSelectRegionAction(state, <SelectRegionAction>action);
    case SEARCH_HAPPENINGS_ACTION:
      return handleSearchHappeningsAction(state, <SearchHappeningsAction>action);
    case SELECT_HAPPENING_ACTION:
      return handleSelectHappeningAction(state, <SelectHappeningAction>action);
    default:
      return state;
  }
}

function handleSelectRegionAction(state: UiState, action: SelectRegionAction): UiState {
  return Object.assign({}, state, { currentRegionId: action.region });
}

function handleSearchHappeningsAction(state: UiState, action: SearchHappeningsAction): UiState {
  return Object.assign({}, state, { searchTerm: action.searchTerm });
}

function handleSelectHappeningAction(state: UiState, action: SelectHappeningAction): UiState {
  return Object.assign({}, state, { selectedHappeningID: action.happening.id });
}
