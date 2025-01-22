import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../core/services/reservation.service';
import { Reservation } from '../../core/models/reservation.model';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FlightDetailsDialogComponent } from '../flight-details-dialog/flight-details-dialog.component';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  upcomingReservations: Reservation[] = [];
  previousReservations: Reservation[] = [];

  // Inject MatDialog into the constructor
  constructor(
    private reservationService: ReservationService,
    private dialog: MatDialog // Inject MatDialog here
  ) {}

  ngOnInit(): void {
    this.upcomingReservations = this.reservationService.getUpcomingReservations();
    this.previousReservations = this.reservationService.getPreviousReservations();
  }

  openReservationDetails(reservationId: string): void {
    const reservation = this.reservationService.getReservationById(reservationId);
    if (reservation) {
      this.dialog.open(FlightDetailsDialogComponent, {
        width: '400px',
        data: reservation, // Pass the reservation details to the dialog
      });
    } else {
      console.error(`Reservation with ID ${reservationId} not found.`);
    }
  }
}
