// src/app/core/services/destination.service.ts
import { Injectable } from '@angular/core';
import { Destination } from '../models/destination.model';

@Injectable({
  providedIn: 'root', // Makes the service available application-wide
})
export class DestinationService {
  private destinations: Destination[] = [
    {
      destinationCode: 'CDG',
      name: 'Paris',
      airportName: 'Charles de Gaulle Airport',
      airportWebsite: 'https://www.parisaeroport.fr/',
      email: 'contact@parisaeroport.fr',
      imageUrl: 'paris.jpg',
      id: '1',
    },
    {
      destinationCode: 'JFK',
      name: 'New York',
      airportName: 'John F. Kennedy International Airport',
      airportWebsite: 'https://www.jfkairport.com/',
      email: 'contact@jfkairport.com',
      imageUrl: 'new-york.jpg',
      id: '2',
    },
  ];
  getAllDestinations(): Destination[] {
    return this.destinations;
  }

  getDestinationByCode(destinationCode: string): Destination | undefined {
    return this.destinations.find(dest => dest.destinationCode === destinationCode);
  }
}
