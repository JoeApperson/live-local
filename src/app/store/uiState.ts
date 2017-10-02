import { Action } from '@ngrx/store';

export interface UiState {
  userId: number;
  currentRegionId: number;
}

const INITIAL_UI_STATE: UiState = {
  userId: undefined,
  currentRegionId: undefined
};

export function reduceUiState(state: UiState = INITIAL_UI_STATE, action: Action): UiState {
  switch (action.type) {
    default:
      return state;
  }
}
