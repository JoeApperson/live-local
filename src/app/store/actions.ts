import { Action } from '@ngrx/store';

import { AllRegionData } from '../../shared/to/all-region-data';
import { HappeningVM } from '../happening-section/happening.vm';
import { LiMASearchResponse } from '../../shared/to/lima-search-results';


// TODO: Organize the actions using enums ... UiStateActions, StoreDataActions, etc.

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

export const SELECT_HAPPENING_ACTION = 'SELECT_HAPPENING_ACTION';
export class SelectHappeningAction implements Action {
  readonly type = SELECT_HAPPENING_ACTION;

  constructor(public happening: HappeningVM) { }
}

export const LOAD_THIS_DAYS_SHOWS_ACTION = 'LOAD_THIS_DAYS_SHOWS_ACTION';
export class LoadThisDaysShowsAction implements Action {
  readonly type = LOAD_THIS_DAYS_SHOWS_ACTION;

  constructor() { }
}

export const THIS_DAYS_SHOWS_LOADED_ACTION = 'THIS_DAYS_SHOWS_LOADED_ACTION';
export class ThisDaysShowsLoadedAction implements Action {
  readonly type = THIS_DAYS_SHOWS_LOADED_ACTION;

  constructor(public payload: LiMASearchResponse) { }
}

export const ERROR_OCCURRED_ACTION = 'ERROR_OCCURRED_ACTION';
export class ErrorOccurredAction implements Action {
  readonly type = ERROR_OCCURRED_ACTION;

  constructor (public payload: string, public errorDetails?: string) { }
}

