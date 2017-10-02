import { Action } from '@ngrx/store';
import { AllRegionalData } from '../shared/to/all-regional-data';

export const LOAD_REGION_HAPPENINGS_ACTION = 'LOAD_REGION_HAPPENINGS_ACTION';
export class LoadRegionHappeningsAction implements Action {
  readonly type = LOAD_REGION_HAPPENINGS_ACTION;

  constructor(public payload: AllRegionalData) {

  }
}
