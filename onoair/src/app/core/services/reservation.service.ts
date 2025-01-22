import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [
    {
      reservationCode: '1',
      flightNumber: '123',
      origin: 'Tel Aviv',
      destination: 'Krakow',
      boardingDateTime: '2025-07-16T20:00:00',
      landingDateTime: '2025-07-17T01:00:00',
      numberOfPassengers: 2,
      destinationImage: 'https://i.pinimg.com/736x/6b/a7/d1/6ba7d1fddf716c4ff033eeb2ddab3881.jpg',
      passengers: [
        { name: 'John Doe', passportNumber: '987654321' },
        { name: 'Jane Doe', passportNumber: '876543210' },
      ],
    },
    {
      reservationCode: '2',
      flightNumber: '456',
      origin: 'Krakow',
      destination: 'Larnaca',
      boardingDateTime: '2024-05-20T20:00:00',
      landingDateTime: '2024-05-21T02:00:00',
      numberOfPassengers: 2,
      destinationImage: 'https://i.pinimg.com/736x/cf/bc/eb/cfbceb21d7e15583e7ea49af452e6edc.jpg',
      passengers: [
        { name: 'John Doe', passportNumber: '987654321' },
        { name: 'Jane Doe', passportNumber: '876543210' },
      ],
    },
  ];

  constructor() {}

  getUpcomingReservations(): Reservation[] {
    const now = new Date();
    return this.reservations.filter(
      (reservation) => new Date(reservation.boardingDateTime) > now
    );
  }

  getPreviousReservations(): Reservation[] {
    const now = new Date();
    return this.reservations.filter(
      (reservation) => new Date(reservation.boardingDateTime) <= now
    );
  }

    /**
   * Get all reservations.
   */
    getAllReservations(): Reservation[] {
      return this.reservations;
    }
  
    /**
     * Get a reservation by ID.
     * @param id - The reservation ID
     * @returns The reservation object or undefined if not found
     */
    getReservationById(id: string): Reservation | undefined {
      return this.reservations.find((reservation) => reservation.reservationCode === id);
    }

}
