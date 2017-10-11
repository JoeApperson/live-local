// The Happening view model

export interface HappeningVM {
  id: number;
  eventName: string;
  venueName: string;
  showDate: string;     // yyyy-mm-dd
  showEndDate: string;  // yyyy-mm-dd or null
  showTime: string;     // may be null
  ticketPrices: string; // sometimes a string (TBD, SOLD OUT, FREE, $40/120), sometimes an amount
  featuring: string;    // may be null or very long
}
