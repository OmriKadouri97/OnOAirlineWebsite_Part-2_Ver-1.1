import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [
    {
      reservationCode: '1',
      flightNumber: 'W61283',
      origin: 'Tel Aviv',
      destination: 'Krakow',
      boardingDateTime: '2025-01-22T10:00:00',
      landingDateTime: '2025-01-22T14:00:00',
      numberOfPassengers: 2,
      destinationImage: 'https://i0.wp.com/theexiledsoul.com/wp-content/uploads/2022/10/img_7609.jpg?resize=720%2C471&ssl=1',
      passengers: [
        { name: 'John Doe', passportNumber: '987654321' },
        { name: 'Jane Doe', passportNumber: '876543210' },
      ],
    },
    {
      reservationCode: '2',
      flightNumber: 'LX8396',
      origin: 'Larnaca',
      destination: 'Zurich',
      boardingDateTime: '2025-01-24T08:00:00',
      landingDateTime: '2025-01-24T12:00:00',
      numberOfPassengers: 3,
      destinationImage: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/02/27/15/zurich-view.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp',
      passengers: [
        { name: 'Alice Smith', passportNumber: '123456789' },
        { name: 'Bob Smith', passportNumber: '223344556' },
        { name: 'Charlie Smith', passportNumber: '998877665' },
      ],
    },
    {
      reservationCode: '3',
      flightNumber: 'BA1234',
      origin: 'London',
      destination: 'New York',
      boardingDateTime: '2025-01-28T16:00:00',
      landingDateTime: '2025-01-28T22:00:00',
      numberOfPassengers: 1,
      destinationImage: 'https://nyc.eu/wp-content/uploads/2015/07/New_York_City-scaled.jpg',
      passengers: [
        { name: 'David Jones', passportNumber: '555666777' },
      ],
    },
    {
      reservationCode: '4',
      flightNumber: 'BZ4317',
      origin: 'Tel Aviv',
      destination: 'Rio De Janeiro',
      boardingDateTime: '2025-01-30T16:00:00',
      landingDateTime: '2025-01-30T22:00:00',
      numberOfPassengers: 2,
      destinationImage: 'https://i.pinimg.com/736x/03/65/65/0365657f0900ab58d26916788ba85104.jpg',
      passengers: [
        { name: 'Michael White', passportNumber: '676767676' },
        { name: 'Laura White', passportNumber: '787878787' },
      ],
    },
    {
      reservationCode: '5',
      flightNumber: 'YX4938',
      origin: 'Dubai',
      destination: 'Philippines',
      boardingDateTime: '2025-02-22T16:00:00',
      landingDateTime: '2025-02-22T22:00:00',
      numberOfPassengers: 4,
      destinationImage: 'https://i.pinimg.com/736x/19/90/39/19903983026c3855561a53d962b24d07.jpg',
      passengers: [
        { name: 'Emily Brown', passportNumber: '121212121' },
        { name: 'Daniel Brown', passportNumber: '343434343' },
        { name: 'Sophia Green', passportNumber: '454545454' },
        { name: 'Henry Green', passportNumber: '565656565' },
      ],
    },
    {
      reservationCode: '6',
      flightNumber: 'AA1023',
      origin: 'Krakow',
      destination: 'Dubai',
      boardingDateTime: '2025-03-24T06:30:00',
      landingDateTime: '2025-03-24T11:40:00',
      numberOfPassengers: 3,
      destinationImage: 'https://i.pinimg.com/736x/f5/36/63/f53663d5ab227cb44df874fec7d45ae4.jpg',
      passengers: [
        { name: 'Oliver Lee', passportNumber: '121313141' },
        { name: 'Emma Lee', passportNumber: '151616171' },
        { name: 'Sophia Lee', passportNumber: '181819191' },
      ],
    },
    {
      reservationCode: '7',
      flightNumber: 'BA4317',
      origin: 'Tel Aviv',
      destination: 'Larnaca',
      boardingDateTime: '2025-02-27T08:00:00',
      landingDateTime: '2025-02-27T09:00:00',
      numberOfPassengers: 1,
      destinationImage: 'https://i.pinimg.com/736x/cf/bc/eb/cfbceb21d7e15583e7ea49af452e6edc.jpg',
      passengers: [
        { name: 'Liam Martinez', passportNumber: '171717171' },
      ],
    },
    {
      reservationCode: '8',
      flightNumber: 'DL5678',
      origin: 'Dubai',
      destination: 'New York',
      boardingDateTime: '2025-03-28T08:00:00',
      landingDateTime: '2025-03-28T18:00:00',
      numberOfPassengers: 3,
      destinationImage: 'https://nyc.eu/wp-content/uploads/2015/07/New_York_City-scaled.jpg',
      passengers: [
        { name: 'Ethan Green', passportNumber: '191919191' },
        { name: 'Isabella Green', passportNumber: '202020202' },
        { name: 'Sophia Green', passportNumber: '212121212' },
      ],
    },
    {
      reservationCode: '9',
      flightNumber: 'LH7834',
      origin: 'Rio De Janeiro',
      destination: 'Philippines',
      boardingDateTime: '2025-02-01T14:00:00',
      landingDateTime: '2025-02-01T22:00:00',
      numberOfPassengers: 2,
      destinationImage: 'https://i.pinimg.com/736x/19/90/39/19903983026c3855561a53d962b24d07.jpg',
      passengers: [
        { name: 'Henry Smith', passportNumber: '232323232' },
        { name: 'Sophia Smith', passportNumber: '242424242' },
      ],
    },
    {
      reservationCode: '10',
      flightNumber: 'AF2469',
      origin: 'Tel Aviv',
      destination: 'London',
      boardingDateTime: '2025-02-07T16:00:00',
      landingDateTime: '2025-02-07T22:00:00',
      numberOfPassengers: 3,
      destinationImage: 'https://i.pinimg.com/736x/aa/a4/cb/aaa4cbf7a92dc6d8302199b08eadf9d5.jpg',
      passengers: [
        { name: 'Ethan Brown', passportNumber: '252525252' },
        { name: 'Sophia Brown', passportNumber: '262626262' },
        { name: 'Emily Brown', passportNumber: '272727272' },
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
