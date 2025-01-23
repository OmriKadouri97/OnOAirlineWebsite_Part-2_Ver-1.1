import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent {
  searchQuery: string = '';
  faqSections = [
    {
      title: 'How to search for flights?',
      content:
        'Use the “Find a Flight” section on the home page to search for flights by origin, destination, and departure date.',
    },
    {
      title: 'How to manage bookings?',
      content:
        'Navigate to the “My Bookings” page to view all your past and upcoming bookings. Select a booking for more details.',
    },
    {
      title: 'How to contact support?',
      content:
        'Click on the support icon at the bottom of any page to contact us via email or phone.',
    },
  ];

  get filteredFaqSections() {
    if (!this.searchQuery) return this.faqSections;
    return this.faqSections.filter((section) =>
      section.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
