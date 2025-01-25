import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FlightService } from '../../../core/services/flight.service';
import { Flight } from '../../../core/models/flight.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-flights',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatButtonModule],
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.css'],
})
export class ManageFlightsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'flightNumber',
    'departureCode',
    'arrivalCode',
    'departureDateTime',
    'arrivalDateTime',
    'numberOfSeats',
    'actions',
  ];
  dataSource = new MatTableDataSource<Flight>();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.loadFlights();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  private loadFlights(): void {
    this.dataSource.data = this.flightService.getAll();
  }

  navigateToFlightDetails(flightNumber: string): void {
    this.router.navigate(['/flight-details', flightNumber]); // Navigate to flight-details
  }
}
