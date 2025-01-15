import { Injectable } from '@angular/core';

export interface FlightDetails {
    flightNumber: string;
    departureDate: Date;
    arrivalDate: Date;
  }
  
  export interface Reservation {
    code: string;
    flightDetails: FlightDetails;
  }
  
  @Injectable({
    providedIn: 'root',
  })
  export class ReservationService {
    private reservations: Reservation[] = [
      {
        code: 'R123',
        flightDetails: {
          flightNumber: 'W61283',
          departureDate: new Date('2024-12-10T10:00:00'),
          arrivalDate: new Date('2024-12-10T14:00:00'),
        },
      },
      {
        code: 'R456',
        flightDetails: {
          flightNumber: 'LX8396',
          departureDate: new Date('2024-11-10T08:00:00'),
          arrivalDate: new Date('2024-11-10T12:00:00'),
        },
      },
    ];
  
    getAll(): Reservation[] {
      return this.reservations;
    }
  }
  