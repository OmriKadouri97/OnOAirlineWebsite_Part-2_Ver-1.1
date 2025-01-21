import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Flight } from '../../core/models/flight.model';

@Component({
  selector: 'app-flight-details-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Flight Details</h2>
    <div mat-dialog-content>
      <p><strong>Flight No.:</strong> {{ flight.flightNumber }}</p>
      <p><strong>Origin:</strong> {{ flight.departureCode }}</p>
      <p><strong>Destination:</strong> {{ flight.arrivalCode }}</p>
      <p><strong>Boarding date:</strong> {{ flight.departureDateTime | date: 'dd/MM/yyyy, h:mm a' }}</p>
      <p><strong>Arrival date:</strong> {{ flight.arrivalDateTime | date: 'dd/MM/yyyy, h:mm a' }}</p>
      <p><strong>No. of Seats:</strong> {{ flight.numberOfSeats }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="closeDialog()">Close</button>
    </div>
  `,
  styleUrls: ['./flight-details-dialog.component.css'],
})
export class FlightDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<FlightDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public flight: Flight
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
