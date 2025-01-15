import { Component, OnInit } from '@angular/core';
import { ReservationService, Reservation } from '../../core/services/reservation.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  previousBookings: Reservation[] = [];
  upcomingBookings: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  private loadBookings(): void {
    const currentDate = new Date();

    const allReservations = this.reservationService.getAll();
    this.previousBookings = allReservations.filter(
      (reservation) =>
        new Date(reservation.flightDetails.arrivalDate) < currentDate
    );
    this.upcomingBookings = allReservations.filter(
      (reservation) =>
        new Date(reservation.flightDetails.departureDate) >= currentDate
    );
  }

  viewBookingDetails(reservation: Reservation): void {
    // Implement navigation or logic to view booking details
    console.log('Viewing details for reservation:', reservation.code);
  }
}
