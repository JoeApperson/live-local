import { ActionReducerMap } from '@ngrx/store';

import { StoreData } from './storeData';
import { reduceUiState, UiState } from './uiState';
import { reduceStoreData } from './reducers/reduceStoreData';

export interface ApplicationState {
  uiState: {};
  storeData: StoreData;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  uiState: reduceUiState,
  storeData: reduceStoreData
};

