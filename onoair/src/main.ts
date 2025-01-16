// src/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';

platformBrowserDynamic()
  .bootstrapComponent(AppComponent)
  .catch((err: unknown) => {
    if (err instanceof Error) {
      console.error('Error bootstrapping the application:', err.message);
    } else {
      console.error('Unexpected error:', err);
    }
  });
