// src/app/shared/header/header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  appName: string = 'Flight Booking System'; // Application name displayed in the header
}
