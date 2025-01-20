import { Component } from '@angular/core';
import { FlightService} from '../../core/services/flight.service';
import { Flight } from '../../core/models/flight.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatTableModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  lastMinuteFlights: Flight[] = [];
  futureFlights: Flight[] = [];

  constructor(private flightService: FlightService) {}

  ngOnInit() {
    this.lastMinuteFlights = this.flightService.getLastMinuteFlights();
    this.futureFlights = this.flightService.getFutureFlights();
  }
}
