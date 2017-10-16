import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { INITIAL_STORE_DATA, StoreData } from './storeData';
import { reduceStoreData } from './reducers/reduceStoreData';
import { reduceUiState } from './reducers/reduceUiState';
import { INITIAL_UI_STATE, UiState } from './uiState';

export interface ApplicationState {
  uiState: UiState;
  storeData: StoreData;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  uiState: reduceUiState,
  storeData: reduceStoreData,
  router: routerReducer
};

export const INITIAL_APPLICATION_STATE = {
  uiState: INITIAL_UI_STATE,
  storeData: INITIAL_STORE_DATA,
  router: undefined
};
