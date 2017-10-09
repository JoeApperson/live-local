import { Action } from '@ngrx/store';
import { AllRegionData } from '../shared/to/all-region-data';

export const SELECT_REGION_ACTION = 'SELECT_REGION_ACTION';
export class SelectRegionAction implements Action {
  readonly type = SELECT_REGION_ACTION;

  constructor(public region: string) { }
}

export const LOAD_REGION_HAPPENINGS_ACTION = 'LOAD_REGION_HAPPENINGS_ACTION';
export class LoadRegionHappeningsAction implements Action {
  readonly type = LOAD_REGION_HAPPENINGS_ACTION;

  constructor(public region: string) { }
}

export const REGION_HAPPENINGS_LOADED_ACTION = 'REGION_HAPPENINGS_LOADED_ACTION';
export class RegionHappeningsLoadedAction implements Action {
  readonly type = REGION_HAPPENINGS_LOADED_ACTION;

  constructor(public payload: AllRegionData) { }
}

export const SEARCH_HAPPENINGS_ACTION = 'SEARCH_HAPPENINGS_ACTION';
export class SearchHappeningsAction implements Action {
  readonly type = SEARCH_HAPPENINGS_ACTION;

  constructor(public searchTerm: string) { }
}
