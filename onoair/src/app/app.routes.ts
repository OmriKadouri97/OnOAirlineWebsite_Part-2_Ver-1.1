// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BookingsComponent } from './features/bookings/bookings.component';
import { ManageFlightsComponent } from './features/admin/ManageFlights/manage-flights.component';
import { ManageDestinationsComponent } from './features/admin/ManageDestination/manage-destinations.component';
import { HelpComponent } from './shared/help/help.component';
import { FlightDetailsComponent } from './features/flight-details/flight-details.component';
import { TicketDetailsComponent } from './features/ticket-details/ticket-details.component';
import { SearchFlightComponent } from './features/search-flight/search-flight.component';
import { ViewDestinationComponent } from './features/view-destination/view-destination.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'search-flight', component: SearchFlightComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'admin/manage-flights', component: ManageFlightsComponent },
  { path: 'admin/manage-destinations', component: ManageDestinationsComponent },
  { path: 'flight-details/:id', component: FlightDetailsComponent }, // For flight details
  { path: 'ticket-details/:id', component: TicketDetailsComponent }, // For ticket details
  { path: 'view-destination/:code', component: ViewDestinationComponent }, // For view destination
  { path: '**', redirectTo: '/' }, // Fallback route
];

