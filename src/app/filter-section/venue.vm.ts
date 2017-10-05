export interface VenueVM {
  id: number;
  name: string;
  locationId: number; // a link to a location
  webSite?: string;
  phone?: string;
  email?: string;
  twitter?: string;
  facebook?: string;
}
