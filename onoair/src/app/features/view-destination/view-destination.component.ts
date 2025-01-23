import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { DestinationService } from '../../core/services/destination.service';
import { Destination } from '../../core/models/destination.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-view-destination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-destination.component.html',
  styleUrls: ['./view-destination.component.css'],
})
export class ViewDestinationComponent implements OnInit {
  destination: Destination | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private destinationService: DestinationService
  ) {}

  ngOnInit(): void {
    const destinationCode = this.route.snapshot.paramMap.get('code');
    if (destinationCode) {
      this.destination = this.destinationService.getDestinationByCode(destinationCode);
    } else {
      console.error('No destination code provided in route.');
    }
  }

  goBack(): void {
    this.router.navigate(['/admin/manage-destinations']);
  }

}
