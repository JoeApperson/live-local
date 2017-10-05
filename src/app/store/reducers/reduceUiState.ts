import { Action } from '@ngrx/store';
import { INITIAL_UI_STATE, UiState } from '../uiState';

export function reduceUiState(state: UiState = INITIAL_UI_STATE, action: Action): UiState {
  switch (action.type) {
    default:
      return state;
  }
}
