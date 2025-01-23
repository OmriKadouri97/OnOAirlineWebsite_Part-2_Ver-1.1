import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FlightService } from '../../core/services/flight.service';
import { Flight } from '../../core/models/flight.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-flight',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatButtonModule],
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css'],
})
export class SearchFlightComponent implements AfterViewInit {
  displayedColumns: string[] = ['flightNumber', 'departureCode', 'arrivalCode', 'departureDateTime', 'arrivalDateTime', 'numberOfSeats', 'actions'];
  dataSource = new MatTableDataSource<Flight>();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.loadFutureFlights();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  private loadFutureFlights(): void {
    const today = new Date();
    const futureFlights = this.flightService.getAll().filter((flight) => {
      const departureDate = new Date(flight.departureDateTime);
      return departureDate >= today;
    });

    this.dataSource.data = futureFlights;
  }

  navigateToFlightDetails(flightNumber: string): void {
    this.router.navigate(['/flight-details', flightNumber]);
  }
}
