import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationService} from '../../../core/services/destination.service';
import { Destination } from '../../../core/models/destination.model';

@Component({
  selector: 'app-manage-destinations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-destinations.component.html',
  styleUrls: ['./manage-destinations.component.css'],
})
export class ManageDestinationsComponent implements OnInit {
  destinations: Destination[] = [];

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.loadDestinations();
  }

  private loadDestinations(): void {
    this.destinations = this.destinationService.getAllDestinations();
  }

  viewDestinationDetails(destination: Destination): void {
    // Logic to view destination details (e.g., open a modal or navigate to a details page)
    console.log('Viewing details for destination:', destination.name);
  }
}
