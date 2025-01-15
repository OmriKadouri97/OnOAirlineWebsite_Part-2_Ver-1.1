import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, // Provides Angular's common directives and pipes
    FormsModule, // Enables template-driven forms
    BrowserAnimationsModule, // Required for Angular Material animations
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
