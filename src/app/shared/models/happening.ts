// The Happening data model

export interface Happening {
  id: number;
  eventName: string;
  venueName: string;
  showDate: Date;
  showEndDate: Date;
  showTime: string;
  ticketPrices: string;
  featuring: string;
}
