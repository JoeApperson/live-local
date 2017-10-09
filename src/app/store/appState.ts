import { ActionReducerMap } from '@ngrx/store';

import { StoreData } from './storeData';
import { reduceStoreData } from './reducers/reduceStoreData';
import { reduceUiState } from './reducers/reduceUiState';
import { UiState } from './uiState';

export interface ApplicationState {
  uiState: UiState;
  storeData: StoreData;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  uiState: reduceUiState,
  storeData: reduceStoreData
};

