import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightService } from '../../../core/services/flight.service';
import { Flight } from '../../../core/models/flight.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-flights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.css'],
})
export class ManageFlightsComponent implements OnInit {
  flights: Flight[] = [];

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.loadFlights();
  }

  private loadFlights(): void {
    this.flights = this.flightService.getAll();
  }

  navigateToFlightDetails(flightNumber: string): void {
    this.router.navigate(['/flight-details', flightNumber]); // Navigate to flight-details
  }
}
