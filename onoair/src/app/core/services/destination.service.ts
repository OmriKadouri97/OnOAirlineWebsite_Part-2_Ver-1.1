import { Injectable } from '@angular/core';
import { Destination } from '../models/destination.model';

@Injectable({
  providedIn: 'root', // Makes the service available application-wide
})
export class DestinationService {
  private destinations: Destination[] = [
    {
      destinationCode: 'TLV',
      name: 'Tel Aviv',
      airportName: 'Ben Gurion Airport',
      airportWebsite: 'https://www.iaa.gov.il/en/airports/ben-gurion/',
      email: 'contact@tlvairport.com',
      imageUrl: 'https://i.pinimg.com/736x/fe/fd/2d/fefd2dba67dcda3d4fd7b80eb2ef10fa.jpg',
      id: '1',
    },
    {
      destinationCode: 'KRK',
      name: 'Krakow',
      airportName: 'Krakow John Paul II International Airport',
      airportWebsite: 'https://www.krakowairport.pl/en/',
      email: 'contact@krakowairport.com',
      imageUrl: 'https://i0.wp.com/theexiledsoul.com/wp-content/uploads/2022/10/img_7609.jpg?resize=720%2C471&ssl=1',
      id: '2',
    },
    {
      destinationCode: 'LCA',
      name: 'Larnaca',
      airportName: 'Larnaca International Airport',
      airportWebsite: 'https://www.hermesairports.com/',
      email: 'contact@larnacaairport.com',
      imageUrl: 'https://i.pinimg.com/736x/cf/bc/eb/cfbceb21d7e15583e7ea49af452e6edc.jpg',
      id: '3',
    },
    {
      destinationCode: 'ZRH',
      name: 'Zurich',
      airportName: 'Zurich Airport',
      airportWebsite: 'https://www.zurich-airport.com/',
      email: 'contact@zurichairport.com',
      imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/02/27/15/zurich-view.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp',
      id: '4',
    },
    {
      destinationCode: 'LHR',
      name: 'London',
      airportName: 'London Heathrow Airport',
      airportWebsite: 'https://www.heathrow.com/',
      email: 'contact@heathrow.com',
      imageUrl: 'https://i.pinimg.com/736x/aa/a4/cb/aaa4cbf7a92dc6d8302199b08eadf9d5.jpg',
      id: '5',
    },
    {
      destinationCode: 'JFK',
      name: 'New York',
      airportName: 'John F. Kennedy International Airport',
      airportWebsite: 'https://www.jfkairport.com/',
      email: 'contact@jfkairport.com',
      imageUrl: 'https://nyc.eu/wp-content/uploads/2015/07/New_York_City-scaled.jpg',
      id: '6',
    },
    {
     destinationCode : 'GIG',
      name : 'Rio de Janeiro',
      airportName : 'Galeão International Airport',
      airportWebsite : 'https://www.riogaleao.com/',
      email : 'contact@riogaleao.com',  
      imageUrl : 'https://i.pinimg.com/736x/03/65/65/0365657f0900ab58d26916788ba85104.jpg',
      id : '7',
    },
    {
      destinationCode : 'DXB',
       name : 'Dubai',
       airportName : 'Dubai International Airport',
       airportWebsite : 'https://www.dubaiairports.ae/',
       email : 'comments@dubaiairports.ae',  
       imageUrl : 'https://i.pinimg.com/736x/f5/36/63/f53663d5ab227cb44df874fec7d45ae4.jpg',
       id : '8',
     },
     {
      destinationCode : 'BIA',
       name : 'Sri Lanka',
       airportName : 'Bandaranaike International Airport',
       airportWebsite : 'https://www.airport.lk/',
       email : 'comments@airport.lk',  
       imageUrl : 'https://i.pinimg.com/736x/77/4e/d8/774ed8d2e2cc3528deb24f57675efb56.jpg',
       id : '9',
     },
     {
      destinationCode : 'MNL',
       name : 'Philippines',
       airportName : 'Ninoy Aquino International Airport',
       airportWebsite : 'https://www.miaa.gov.ph/',
       email : 'comments@miaa.gov.ph',  
       imageUrl : 'https://i.pinimg.com/736x/19/90/39/19903983026c3855561a53d962b24d07.jpg',
       id : '10',
     },
  ];

  /**
   * Get all destinations.
   * @returns Array of all destinations
   */
  getAllDestinations(): Destination[] {
    return this.destinations;
  }

  /**
   * Get a specific destination by code.
   * @param destinationCode Code of the destination
   * @returns The destination object if found, undefined otherwise
   */
  getDestinationByCode(destinationCode: string): Destination | undefined {
    return this.destinations.find(dest => dest.destinationCode === destinationCode);
  }
}
