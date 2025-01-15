// src/app/app.component.ts
import { Component } from '@angular/core';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterOutlet], // Import FooterComponent
})
export class AppComponent {
  title = 'Flight Booking System'; // Declare the title property
}
