import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationService} from '../../../core/services/destination.service';
import { Destination } from '../../../core/models/destination.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-destinations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-destinations.component.html',
  styleUrls: ['./manage-destinations.component.css'],
})
export class ManageDestinationsComponent implements OnInit {
  destinations: Destination[] = [];

  constructor(private destinationService: DestinationService, private router: Router) {}

  ngOnInit(): void {
    this.loadDestinations();
  }

  private loadDestinations(): void {
    this.destinations = this.destinationService.getAllDestinations();
  }

  navigateToViewDestination(destinationCode: string): void {
    this.router.navigate(['/view-destination', destinationCode]);
  }
}
