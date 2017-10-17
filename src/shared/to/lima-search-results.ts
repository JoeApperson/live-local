/*
Captured form the JSON results of this query:

https://archive.org/advancedsearch.php?q=title%3A%22-10-12%22+AND+collection%3A%28etree%29&fl%5B%5D=avg_rating
&fl%5B%5D=collection&fl%5B%5D=contributor&fl%5B%5D=creator&fl%5B%5D=date&fl%5B%5D=description&fl%5B%5D=downloads
&fl%5B%5D=genre&fl%5B%5D=headerImage&fl%5B%5D=identifier&fl%5B%5D=oai_updatedate&fl%5B%5D=publicdate&fl%5B%5D=publisher
&sort%5B%5D=avg_rating+desc&sort%5B%5D=creatorSorter+asc&sort%5B%5D=&rows=500&page=1&output=json&#raw
 */

export interface LiMASearchResponseHeader {
  status: number;
  QTime: number;
  params: {
    query: string;
    qin: string;
    fields: string;
    wt: string;
    rows: number,
    start: number
  };
}

export interface LiMASearchResponseItem {
  avg_rating?: string;        // 0 - 5.0
  creator?: string;           // performer name
  description: string;        // set list
  identifier: string;         // use this to get an item's details
  title: string;              // item's title
}

export interface LiMASearchResponse {
  responseHeader: LiMASearchResponseHeader;
  response: {
    numFound: number;
    start: number;
    docs: { [key: number]: LiMASearchResponseItem };
  };
}

