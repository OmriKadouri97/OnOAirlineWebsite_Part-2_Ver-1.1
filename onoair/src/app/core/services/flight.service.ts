import { Injectable } from '@angular/core';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root', // Makes the service available throughout the application
})
export class FlightService {
  private flights: Flight[] = [
    {
      flightNumber: 'W61283',
      departureCode: 'TLV',
      arrivalCode: 'Krakow',
      departureDateTime: '2024-12-01T10:00:00',
      arrivalDateTime: '2024-12-01T14:00:00',
      numberOfSeats: 180,
    },
    {
      flightNumber: 'LX8396',
      departureCode: 'Larnaca',
      arrivalCode: 'Zurich',
      departureDateTime: '2024-12-05T08:00:00',
      arrivalDateTime: '2024-12-05T12:00:00',
      numberOfSeats: 200,
    },
    {
      flightNumber: 'BA1234',
      departureCode: 'London',
      arrivalCode: 'New York',
      departureDateTime: '2024-12-10T16:00:00',
      arrivalDateTime: '2024-12-10T22:00:00',
      numberOfSeats: 250,
    },
  ];

  constructor() {}

  getLastMinuteFlights(): Flight[] {
    const today = new Date();
    return this.flights.filter(flight => {
      const departureDate = new Date(flight.departureDateTime);
      const diffDays = Math.floor((departureDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      return diffDays <= 7;
    });
  }

  getFutureFlights(): Flight[] {
    const today = new Date();
    return this.flights.filter(flight => new Date(flight.departureDateTime) > today);
  }


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
}
