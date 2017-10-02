import { ActionReducerMap } from '@ngrx/store';

import { reduceStoreData, StoreData } from './storeData';
import { reduceUiState, UiState } from './uiState';

export interface ApplicationState {
  uiState: {};
  storeData: StoreData;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  uiState: reduceUiState,
  storeData: reduceStoreData
};

