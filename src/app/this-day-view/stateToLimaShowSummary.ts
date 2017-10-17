import { LimaShowVM } from './lima-show.vm';
import { LiMASearchResponseItem } from '../../shared/to/lima-search-results';

export function mapLimaShowToShowSummary(show: LiMASearchResponseItem): LimaShowVM {
  return {
    id: show.identifier,
    title: show.title,
    artist: show.creator,
    description: show.description,
    href: 'https://archive.org/details/' + show.identifier,
    // if there is an avg rating, turn it into a number
    rating: show.avg_rating ? +show.avg_rating : undefined
  };
}
