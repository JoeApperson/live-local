export interface LocationVM {
  id: number;
  street?: string;
  city: string;
  state: string;
  geo?: {
    latitude: number;
    longitude: number;
  };
}
