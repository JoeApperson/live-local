/* Harvested these structures from a call like this:

https://archive.org/metadata/nm2006-12-15.flac16

 */

export interface LiMAMetadataResponse {
  created: number; // maybe a js date?
  d1: string;      // download server url like: "ia600201.us.archive.org",
  dir: string;     // item's dir on the server like: "/1/items/nm2006-12-15.flac16",
  files: Array<LiMAFileInfo>;
  files_count: number;
  item_size: number;
  metadata: LiMAMetadata;
  reviews: Array<LiMAReview>;
  server: string;
  uniq: number;
  workable_servers: Array<string>;
}

export interface LiMAMetadata {
  identifier: string;
  title: string;
  creator: string;
  mediatype: string;
  collection: Array<string>;
  type: string;
  description: string;
  date: string;
  year: string;
  publicdate: string;
  addeddate: string;
  uploader: string;
  venue: string;
  coverage: string;
  source: string;
  lineage: string;
  taper: string;
  transferer: string;
  md5s: string;
  updatedate: string;
  updater: string;
  backup_location: string;
}

export interface LiMAFileInfo {
  name: string;
  source: string;
  format: string;
  md5: string;
  album?: string;
  title?: string;
  size?: string;
  crc32?: string;
  sha1?: string;
  length?: string;
  height?: string;
  width?: string;
}

export interface LiMAReview {
  reviewbody: string;
  reviewtitle: string;
  stars: string;
  reviewer: string;
  createdate: string;
  reviewdate: string;
}
