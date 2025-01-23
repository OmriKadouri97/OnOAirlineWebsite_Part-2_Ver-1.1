import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService, EnrichedFlight } from '../../core/services/flight.service';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent implements OnInit {
  flight: EnrichedFlight | undefined;

  constructor(private route: ActivatedRoute, private flightService: FlightService, private location: Location) {}

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('id'); // Get flight ID from URL
    if (flightNumber) {
      this.flight = this.flightService.getByFlightNumber(flightNumber); // Fetch flight data
    }
  }

  goBack(): void {
    this.location.back();
  }

}
