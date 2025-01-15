// src/app/core/services/destination.service.ts
import { Injectable } from '@angular/core';

export interface Destination {
  code: string;
  name: string;
  airportName: string;
  airportWebsite: string;
  email: string;
}

@Injectable({
  providedIn: 'root', // Makes the service available application-wide
})
export class DestinationService {
  private destinations: Destination[] = [
    {
      code: 'CDG',
      name: 'Paris',
      airportName: 'Charles de Gaulle Airport',
      airportWebsite: 'https://www.parisaeroport.fr/',
      email: 'contact@parisaeroport.fr',
    },
    {
      code: 'JFK',
      name: 'New York',
      airportName: 'John F. Kennedy International Airport',
      airportWebsite: 'https://www.jfkairport.com/',
      email: 'contact@jfkairport.com',
    },
  ];

  getAll(): Destination[] {
    return this.destinations;
  }
}
