// src/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';

platformBrowserDynamic()
  .bootstrapComponent(AppComponent)
  .catch((err: unknown) => console.error('Error bootstrapping:', err));
