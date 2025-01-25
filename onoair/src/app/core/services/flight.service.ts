import { Injectable } from '@angular/core';
import { Flight } from '../models/flight.model';
import { DestinationService } from './destination.service';

export interface EnrichedFlight extends Flight {
  destinationName: string; // Destination name (e.g., city or country)
  imageUrl: string; // URL of the destination image
}

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private flights: Flight[] = [
    {
      flightNumber: 'W61283',
      departureCode: 'TLV',
      arrivalCode: 'KRK',
      departureDateTime: '2025-01-22T10:00:00',
      arrivalDateTime: '2025-01-22T14:00:00',
      numberOfSeats: 180,
    },
    {
      flightNumber: 'LX8396',
      departureCode: 'LCA',
      arrivalCode: 'ZRH',
      departureDateTime: '2025-01-24T08:00:00',
      arrivalDateTime: '2025-01-24T12:00:00',
      numberOfSeats: 200,
    },
    {
      flightNumber: 'BA1234',
      departureCode: 'LHR',
      arrivalCode: 'JFK',
      departureDateTime: '2025-01-28T16:00:00',
      arrivalDateTime: '2025-01-28T22:00:00',
      numberOfSeats: 250,
    },
    {
      flightNumber: 'BZ4317',
      departureCode: 'TLV',
      arrivalCode: 'GIG',
      departureDateTime: '2025-01-30T16:00:00',
      arrivalDateTime: '2025-01-30T22:00:00',
      numberOfSeats: 220,
    },
    {
      flightNumber: 'YX4938',
      departureCode: 'DXB',
      arrivalCode: 'MNL',
      departureDateTime: '2025-02-22T16:00:00',
      arrivalDateTime: '2025-02-22T22:00:00',
      numberOfSeats: 220,
    },
    {
      flightNumber: 'AA1023',
      departureCode: 'KRK',
      arrivalCode: 'DXB',
      departureDateTime: '2025-03-24T06:30:00',
      arrivalDateTime: '2025-03-24T11:40:00',
      numberOfSeats: 270,
    },
    {
      flightNumber: 'BA4317',
      departureCode: 'TLV',
      arrivalCode: 'LCA',
      departureDateTime: '2025-02-27T08:00:00',
      arrivalDateTime: '2025-02-27T09:00:00',
      numberOfSeats: 210,
    },
    {
      flightNumber: 'DL5678',
      departureCode: 'DXB',
      arrivalCode: 'JFK',
      departureDateTime: '2025-03-28T08:00:00',
      arrivalDateTime: '2025-03-28T18:00:00',
      numberOfSeats: 250,
    },
    {
      flightNumber: 'LH7834',
      departureCode: 'GIG',
      arrivalCode: 'MNL',
      departureDateTime: '2025-02-01T14:00:00',
      arrivalDateTime: '2025-02-01T22:00:00',
      numberOfSeats: 280,
    },
    {
      flightNumber: 'AF2469',
      departureCode: 'TLV',
      arrivalCode: 'LHR',
      departureDateTime: '2025-02-07T16:00:00',
      arrivalDateTime: '2025-02-07T22:00:00',
      numberOfSeats: 240,
    },
  ];

  constructor(private destinationService: DestinationService) {}

  /**
   * Get all flights with enriched destination details.
   * @returns Array of enriched flights
   */
  getAll(): EnrichedFlight[] {
    return this.flights.map((flight) => this.enrichFlightWithDestination(flight));
  }

/**
 * Get last-minute flights (departing within the next 7 days, including today) with enriched destination details.
 * @returns Array of enriched last-minute flights
 */
getLastMinuteFlights(): EnrichedFlight[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to midnight for accurate comparison
  const oneWeekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  return this.flights
    .filter((flight) => {
      const departureDate = new Date(flight.departureDateTime);
      departureDate.setHours(0, 0, 0, 0); // Normalize the flight's departure date
      // Include flights departing today or within the next 7 days
      return departureDate >= today && departureDate <= oneWeekFromNow;
    })
    .map((flight) => this.enrichFlightWithDestination(flight));
}




  /**
   * Get future flights (departing after today) with enriched destination details.
   * @returns Array of enriched future flights
   */
  getFutureFlights(): Flight[] {
    const today = new Date();
    const oneWeekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  
    return this.flights.filter((flight) => {
      const departureDate = new Date(flight.departureDateTime);
      return departureDate > oneWeekFromNow;
    });
  }
  
  

  /**
   * Get a specific flight by flight number with enriched destination details.
   * @param flightNumber Flight number to search for
   * @returns The enriched flight object if found, undefined otherwise
   */
  getByFlightNumber(flightNumber: string): EnrichedFlight | undefined {
    const flight = this.flights.find((flight) => flight.flightNumber === flightNumber);
    return flight ? this.enrichFlightWithDestination(flight) : undefined;
  }

  /**
   * Add a new flight.
   * @param flight Flight object to add
   */
  addFlight(flight: Flight): void {
    this.flights.push(flight);
  }

  /**
   * Enrich a flight with destination details.
   * Adds destinationName and imageUrl to the flight object.
   * @param flight Flight object
   * @returns Enriched flight object
   */
  private enrichFlightWithDestination(flight: Flight): EnrichedFlight {
    const destination = this.destinationService.getDestinationByCode(flight.arrivalCode);
    return {
      ...flight,
      destinationName: destination?.name || 'Unknown Destination',
      imageUrl: destination?.imageUrl || 'placeholder.jpg', // Default image if not found
    };
  }
}
