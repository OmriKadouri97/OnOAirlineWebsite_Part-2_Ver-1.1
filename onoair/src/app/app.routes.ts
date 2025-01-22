// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BookingsComponent } from './features/bookings/bookings.component';
import { ManageFlightsComponent } from './features/admin/ManageFlights/manage-flights.component';
import { ManageDestinationsComponent } from './features/admin/ManageDestination/manage-destinations.component';
import { HelpComponent } from './shared/help/help.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'help', component: HelpComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'admin/manage-flights', component: ManageFlightsComponent },
  { path: 'admin/manage-destinations', component: ManageDestinationsComponent },
];
