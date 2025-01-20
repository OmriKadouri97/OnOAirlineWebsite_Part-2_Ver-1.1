export interface Flight {
    flightNumber: string;
    departureCode: string;
    arrivalCode: string;
    departureDateTime: string; // ISO format
    arrivalDateTime: string;  // ISO format
    numberOfSeats: number;
  }
  