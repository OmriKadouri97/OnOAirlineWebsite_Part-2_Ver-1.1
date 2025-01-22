import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Flight } from '../../core/models/flight.model';
import { Reservation } from '../../core/models/reservation.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-details-dialog',
  standalone: true,
  templateUrl: './flight-details-dialog.component.html',
  styleUrls: ['./flight-details-dialog.component.css'],
  imports: [CommonModule],
})
export class FlightDetailsDialogComponent {
  isReservation: boolean;
  origin: string;
  destination: string;
  boardingDateTime: string;
  landingDateTime: string;
  numberOfPassengersOrSeats: number;
  passengers: { name: string; passportNumber: string }[] | null;

  constructor(
    public dialogRef: MatDialogRef<FlightDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reservation | Flight
  ) {
    this.isReservation = this.checkIfReservation(data);

    // Initialize fields dynamically
    this.origin = this.isReservation ? (data as Reservation).origin : (data as Flight).departureCode;
    this.destination = this.isReservation ? (data as Reservation).destination : (data as Flight).arrivalCode;
    this.boardingDateTime = this.isReservation ? (data as Reservation).boardingDateTime : (data as Flight).departureDateTime;
    this.landingDateTime = this.isReservation ? (data as Reservation).landingDateTime : (data as Flight).arrivalDateTime;
    this.numberOfPassengersOrSeats = this.isReservation ? (data as Reservation).numberOfPassengers : (data as Flight).numberOfSeats;
    this.passengers = this.isReservation ? (data as Reservation).passengers : null;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  private checkIfReservation(data: Reservation | Flight): data is Reservation {
    return 'origin' in data && 'passengers' in data;
  }
}
