import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ReservationService } from '../../core/services/reservation.service';
import { Reservation } from '../../core/models/reservation.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
})
export class TicketDetailsComponent implements OnInit {
  reservation: Reservation | undefined;

  constructor(private route: ActivatedRoute, private reservationService: ReservationService , private router: Router) {}

  ngOnInit(): void {
    const reservationId = this.route.snapshot.paramMap.get('id'); // Get ID from route
    if (reservationId) {
      this.reservation = this.reservationService.getReservationById(reservationId); // Fetch reservation details
    }
  }

  closePage(): void {
    this.router.navigate(['/bookings']); // Navigate back to bookings page
  }
}