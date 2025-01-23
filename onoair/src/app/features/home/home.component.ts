import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FlightService, EnrichedFlight } from '../../core/services/flight.service';
import { Flight } from '../../core/models/flight.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatTableModule, MatSortModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  lastMinuteFlights: EnrichedFlight[] = [];
  futureFlights: MatTableDataSource<Flight> = new MatTableDataSource<Flight>();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.lastMinuteFlights = this.flightService.getLastMinuteFlights();
    this.futureFlights = new MatTableDataSource(this.flightService.getFutureFlights());
  }

  ngAfterViewInit(): void {
    // Connect MatSort to the MatTableDataSource after the view has been initialized
    this.futureFlights.sort = this.sort;
  }

  navigateToFlightDetails(flightNumber: string): void {
    this.router.navigate(['/flight-details', flightNumber]);
  }
}
