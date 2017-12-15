// The Live Music Archive view model

export interface LimaShowVM {
  id: string;
  artist: string;
  title: string;
  description: string;
  rating: number;
  numReviews: number;
  href: string;  // link to the item on the archive
  highlight?: boolean;
}
