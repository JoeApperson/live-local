import { INITIAL_STORE_DATA, StoreData } from '../storeData';
import { Happening } from '../../shared/models/happening';
import { RegionHappeningsLoadedAction, SearchHappeningsAction } from '../actions';
import { handleRegionHappeningsLoadedAction, handleSearchHappeningsAction } from './reduceStoreData';
import * as moment from 'moment';

describe('storeDataReducer', () => {

  it('should not include past happenings', () => {
    const futureDate = moment().add(1).toISOString();
    const loadedHappenings: Array<Happening> = [{
      id: 1000,
      showDate: '2017-04-22',
      showEndDate: null,
      eventName: 'The Weepies',
      venueName: '9:30 Club, Washington, DC',
      ticketPrices: 'TBD',
      showTime: '7pm',
      featuring: null
    }, {
      id: 1001,
      showDate: futureDate,
      showEndDate: null,
      eventName: 'Jayme Stone\'s Folklife',
      venueName: 'Barns of Rose Hill, Berryville, VA',
      ticketPrices: '15',
      showTime: '8pm',
      featuring: null
    }];

    const action = new RegionHappeningsLoadedAction({ happenings: loadedHappenings });
    const expectedState: StoreData = {
      happenings: {
        1001: {
          id: 1001,
          showDate: futureDate,
          showEndDate: null,
          eventName: 'Jayme Stone\'s Folklife',
          venueName: 'Barns of Rose Hill, Berryville, VA',
          ticketPrices: '15',
          showTime: '8pm',
          featuring: null
        }
      },
      visibleHappenings: [1001]
    };

    const newState = handleRegionHappeningsLoadedAction(INITIAL_STORE_DATA, action);

    expect(newState).toEqual(expectedState);
    expect(newState.happenings[1001]).toBeDefined();
    expect(newState.visibleHappenings.length).toEqual(1);
    expect(newState.visibleHappenings[0]).toEqual(1001);
  });

  it('should return matching items from search', () => {
    const state: StoreData = {
      happenings: {
        1001: {
          id: 1001,
          showDate: '2020-11-11',
          showEndDate: null,
          eventName: 'Event 1',
          venueName: 'Barns of Rose Hill, Berryville, VA',
          ticketPrices: '15',
          showTime: '8pm',
          featuring: null
        },
        1002: {
          id: 1002,
          showDate: '2020-11-11',
          showEndDate: null,
          eventName: 'Event 2',
          venueName: 'Barns of Rose Hill, Berryville, VA',
          ticketPrices: '$25/55',
          showTime: '8pm',
          featuring: null
        },
        1003: {
          id: 1003,
          showDate: '2020-11-11',
          showEndDate: null,
          eventName: 'Event 3',
          venueName: 'Shimmy Shack, Frogtown, VA',
          ticketPrices: 'FREE',
          showTime: '9pm',
          featuring: 'featuring The Infamous Shack Shakers'
        }
      },
      visibleHappenings: [1001, 1002, 1003]
    };

    // find happenings containing 'barn'
    const action = new SearchHappeningsAction('barn');
    const newState = handleSearchHappeningsAction(state, action);

    expect(newState.visibleHappenings.length).toEqual(2);
    expect(newState.happenings[1001]).toBeDefined();
    expect(newState.happenings[1002]).toBeDefined();
    expect(newState.happenings[1003]).toBeDefined();
    expect(newState.visibleHappenings.indexOf(1003)).toEqual(-1);
  });
});
