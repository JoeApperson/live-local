import { values } from 'lodash';

import { ApplicationState } from '../store/appState';
import { LimaShowVM } from './lima-show.vm';
import { LiMASearchResponseItem } from '../../shared/to/lima-search-results';

export function stateToTodaysLimaShowsSelector(state: ApplicationState): LimaShowVM[] {
  const shows = values<LiMASearchResponseItem>(state.storeData.limaShows);
  if (!shows) {
    return [];
  }
  return shows.map(mapLimaShowToShowSummary).sort((a, b) => {
    // sort by rating (desc)...
    if (!a.rating || a.rating < b.rating) {
      return 1;
    } else if (!b.rating || a.rating > b.rating) {
      return -1;

    // then num reviews (desc)...
    } else if (a.numReviews < b.numReviews) {
      return 1;
    } else if (a.numReviews > b.numReviews) {
      return -1;

    // and finally by title (asc)
    } else if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;

    } else {
      return 0;
    }
  });
}

function mapLimaShowToShowSummary(show: LiMASearchResponseItem): LimaShowVM {
  return {
    id: show.identifier,
    title: show.title,
    artist: show.creator,
    description: show.description,
    href: 'https://archive.org/details/' + show.identifier,
    numReviews: show.num_reviews ? +show.num_reviews : 0,
    // if there is an avg rating, turn it into a number
    rating: show.avg_rating ? +show.avg_rating : undefined
  };
}
