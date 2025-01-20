import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightService } from '../../../core/services/flight.service';
import { Flight } from '../../../core/models/flight.model';

@Component({
  selector: 'app-manage-flights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.css'],
})
export class ManageFlightsComponent implements OnInit {
  flights: Flight[] = [];

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.loadFlights();
  }

  private loadFlights(): void {
    this.flights = this.flightService.getAll();
  }

  viewFlightDetails(flight: Flight): void {
    // Add logic to handle flight details viewing
    console.log('Viewing details for flight:', flight.flightNumber);
  }
}
