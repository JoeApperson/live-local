import { Happening } from '../shared/models/happening';

export interface StoreData {
  // An object map, keyed by happening id.
  happenings: { [key: number]: Happening };
  visibleHappenings: Array<number>;
}

export const INITIAL_STORE_DATA: StoreData = {
  happenings: {},
  visibleHappenings: []
};
