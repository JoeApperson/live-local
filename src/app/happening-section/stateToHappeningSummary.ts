import { values, keys, partial, last, join} from 'lodash';

import { ApplicationState } from '../store/appState';
import { HappeningVM } from './happening.vm';
import { Happening } from '../../shared/models/happening';

export function stateToHappeningSummariesSelector(state: ApplicationState): HappeningVM[] {
  const happenings = values<Happening>(state.storeData.happenings);
  return happenings.map(mapHappeningToHappeningSummary);
}

export function mapHappeningToHappeningSummary(happ: Happening): HappeningVM {
  const vm: HappeningVM = happ;

  // if the ticket price is a number, format it as currency, if it's missing, make it TBD.
  if (!vm.ticketPrices || vm.ticketPrices === '') {
    vm.ticketPrices = 'TBD';
  } else if (!isNaN(+vm.ticketPrices)) {
    vm.ticketPrices = '$' + (Number(vm.ticketPrices).toFixed(2));
  }
  return vm;
}

export function stateToVisibleHappeningsSelector(state: ApplicationState): Array<number> {
  return state.storeData.visibleHappenings;
}
