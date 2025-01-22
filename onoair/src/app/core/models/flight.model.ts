export interface Flight {
  flightNumber: string; // Unique flight identifier
  departureCode: string; // Departure destination code
  arrivalCode: string; // Landing destination code
  departureDateTime: string; // Departure date and time (ISO format)
  arrivalDateTime: string; // Landing date and time (ISO format)
  numberOfSeats: number; // Total number of seats on the flight
}
