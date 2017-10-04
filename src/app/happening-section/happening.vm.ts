// The Happening view model

export interface HappeningVM {
  id: number;
  eventName: string;
  venueName: string;
  showDate: string;    // yyyy-mm-dd
  showEndDate: string; // yyyy-mm-dd
  showTime: string;
  ticketPrices: string;
  featuring: string;
}
