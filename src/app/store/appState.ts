import { ActionReducerMap } from '@ngrx/store';

import { StoreData } from './storeData';
import { reduceStoreData } from './reducers/reduceStoreData';
import { reduceUiState } from './reducers/reduceUiState';

export interface ApplicationState {
  uiState: {};
  storeData: StoreData;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  uiState: reduceUiState,
  storeData: reduceStoreData
};

