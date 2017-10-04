import { values, keys, partial, last, join} from 'lodash';

import { ApplicationState } from '../store/appState';
import { HappeningVM } from './happening.vm';
import { Happening } from '../shared/models/happening';

export function stateToHappeningSummariesSelector(state: ApplicationState): HappeningVM[] {
  const happenings = values<Happening>(state.storeData.happenings);
  return happenings.map(partial(mapHappeningToHappeningSummary, state));
}

function mapHappeningToHappeningSummary(state: ApplicationState, happ: Happening): HappeningVM {
  return happ;
}
