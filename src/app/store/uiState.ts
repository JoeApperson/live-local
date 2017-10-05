
export interface UiState {
  userId: number;
  currentRegionId: number;
}

export const INITIAL_UI_STATE: UiState = {
  userId: undefined,
  currentRegionId: undefined
};
