export interface Passenger {
  name: string;
  passportNumber: string;
}

export interface Reservation {
  reservationCode: string; // Unique reservation identifier
  flightNumber: string; // Associated flight number
  origin: string; // Origin of the flight
  destination: string; // Destination of the flight
  boardingDateTime: string; // ISO format boarding date
  landingDateTime: string; // ISO format landing date
  numberOfPassengers: number; // Number of passengers
  destinationImage: string; // URL of the destination image
  passengers: { name: string; passportNumber: string }[]; // Passenger list
}
