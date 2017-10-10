
export interface UiState {
  currentRegionId: string;
  searchTerm: string;
  userId: string;
  selectedHappeningID?: number;
}

export const INITIAL_UI_STATE: UiState = {
  currentRegionId: undefined,
  searchTerm: undefined,
  userId: undefined
};
