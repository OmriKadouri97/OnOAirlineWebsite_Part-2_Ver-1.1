// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BookingsComponent } from './features/bookings/bookings.component';
import { ManageFlightsComponent } from './features/admin/ManageFlights/manage-flights.component';
import { ManageDestinationsComponent } from './features/admin/ManageDestination/manage-destinations.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'admin/manage-flights', component: ManageFlightsComponent },
  { path: 'admin/manage-destinations', component: ManageDestinationsComponent },
  { path: '**', redirectTo: '/home' }, // Fallback route
];
