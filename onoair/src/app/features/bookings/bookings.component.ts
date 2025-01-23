import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../core/services/reservation.service';
import { Reservation } from '../../core/models/reservation.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  upcomingReservations: Reservation[] = [];
  previousReservations: Reservation[] = [];

  // Inject MatDialog into the constructor
  constructor(
    private reservationService: ReservationService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.upcomingReservations = this.reservationService.getUpcomingReservations();
    this.previousReservations = this.reservationService.getPreviousReservations();
  }

  navigateToTicketDetails(reservationCode: string): void {
    if (reservationCode) {
      this.router.navigate(['/ticket-details', reservationCode]);
    } else {
      console.error('Invalid reservation code');
    }
  }  
}
