export interface Reservation {
    reservationCode: string; // Unique identifier for the reservation
    flightNumber: string;    // Associated flight number
    numberOfPassengers: number; // Total number of passengers
    passengerDetails: Passenger[]; // Array of passenger information
  }
  
  // Interface for individual passenger details
  export interface Passenger {
    name: string;           // Passenger's full name
    passportNumber: string; // Passport number of the passenger
  }
  