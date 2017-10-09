import { Action } from '@ngrx/store';
import { INITIAL_UI_STATE, UiState } from '../uiState';
import { SEARCH_HAPPENINGS_ACTION, SearchHappeningsAction, SELECT_REGION_ACTION, SelectRegionAction } from '../actions';

export function reduceUiState(state: UiState = INITIAL_UI_STATE, action: Action): UiState {
  switch (action.type) {
    case SELECT_REGION_ACTION:
      return handleSelectRegionAction(state, <SelectRegionAction>action);
    case SEARCH_HAPPENINGS_ACTION:
      return handleSearchHappeningsAction(state, <SearchHappeningsAction>action);
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
