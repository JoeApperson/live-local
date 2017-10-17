import { Happening } from '../../shared/models/happening';
import { LiMASearchResponseItem } from '../../shared/to/lima-search-results';

export interface StoreData {
  // An object map, keyed by happening id.
  happenings: { [key: number]: Happening };
  visibleHappenings: Array<number>;
  limaShows: { [key: number]: LiMASearchResponseItem };
}

export const INITIAL_STORE_DATA: StoreData = {
  happenings: {},
  visibleHappenings: [],
  limaShows: {}
};
