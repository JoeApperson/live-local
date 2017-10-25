// The Live Music Archive view model

export interface LimaShowVM {
  id: string;
  artist: string;
  title: string;
  description: string;
  rating?: number;
  href: string;  // link to the item on the archive
}
