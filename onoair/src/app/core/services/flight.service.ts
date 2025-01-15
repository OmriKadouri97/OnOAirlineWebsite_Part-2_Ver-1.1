import { Injectable } from '@angular/core';

export interface Flight {
  flightNumber: string;
  departure: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
  seats: number;
}

@Injectable({
  providedIn: 'root', // Makes the service available throughout the application
})
export class FlightService {
  private flights: Flight[] = [
    {
      flightNumber: 'W61283',
      departure: 'Tel Aviv',
      destination: 'Krakow',
      departureDate: new Date('2024-12-01T10:00:00'),
      arrivalDate: new Date('2024-12-01T14:00:00'),
      seats: 180,
    },
    {
      flightNumber: 'LX8396',
      departure: 'Larnaca',
      destination: 'Zurich',
      departureDate: new Date('2024-12-05T08:00:00'),
      arrivalDate: new Date('2024-12-05T12:00:00'),
      seats: 200,
    },
    {
      flightNumber: 'BA1234',
      departure: 'London',
      destination: 'New York',
      departureDate: new Date('2024-12-10T16:00:00'),
      arrivalDate: new Date('2024-12-10T22:00:00'),
      seats: 250,
    },
  ];

  constructor() {}

  /**
   * Get all flights.
   * @returns Array of all flights
   */
  getAll(): Flight[] {
    return this.flights;
  }

  /**
   * Get a specific flight by flight number.
   * @param flightNumber Flight number to search for
   * @returns The flight object if found, undefined otherwise
   */
  getByFlightNumber(flightNumber: string): Flight | undefined {
    return this.flights.find((flight) => flight.flightNumber === flightNumber);
  }

  /**
   * Add a new flight.
   * @param flight Flight object to add
   */
  addFlight(flight: Flight): void {
    this.flights.push(flight);
  }

  /**
   * Delete a flight by flight number.
   * @param flightNumber Flight number of the flight to delete
   */
  deleteFlight(flightNumber: string): void {
    this.flights = this.flights.filter(
      (flight) => flight.flightNumber !== flightNumber
    );
  }

  /**
   * Update an existing flight.
   * @param flightNumber Flight number of the flight to update
   * @param updatedFlight Updated flight object
   */
  updateFlight(flightNumber: string, updatedFlight: Flight): void {
    const index = this.flights.findIndex(
      (flight) => flight.flightNumber === flightNumber
    );
    if (index !== -1) {
      this.flights[index] = updatedFlight;
    }
  }
}
