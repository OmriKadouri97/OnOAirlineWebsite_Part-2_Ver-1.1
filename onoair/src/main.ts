import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';

platformBrowserDynamic()
  .bootstrapComponent(AppComponent)
  .catch((err) => console.error('Error bootstrapping the app:', err));
