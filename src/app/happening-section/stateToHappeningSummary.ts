import { values, keys, partial, last, join} from 'lodash';

import { ApplicationState } from '../store/appState';
import { HappeningVm } from './happening.vm';
import { Happening } from '../shared/models/happening';

export function stateToHappeningSummariesSelector(state: ApplicationState): HappeningVm[] {
  const happenings = values<Happening>(state.storeData.happenings);
  return happenings.map(partial(mapHappeningToHappeningSummary, state));
}

function mapHappeningToHappeningSummary(state: ApplicationState, happ: Happening): HappeningVm {
  return happ;
}
