import { Component } from '@angular/core';
import { FlightService, EnrichedFlight } from '../../core/services/flight.service';
import { Flight } from '../../core/models/flight.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FlightDetailsDialogComponent } from '../flight-details-dialog/flight-details-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatTableModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  lastMinuteFlights: EnrichedFlight[] = [];
  futureFlights: Flight[] = [];

  constructor(private flightService: FlightService, private dialog: MatDialog) {}

  ngOnInit() {
    this.lastMinuteFlights = this.flightService.getLastMinuteFlights();
    this.futureFlights = this.flightService.getFutureFlights();
  }

  openFlightDetails(flight: Flight): void {
    this.dialog.open(FlightDetailsDialogComponent, {
      width: '400px',
      data: flight,
    });
  }
}
