import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

const routes: Routes = [
  // Define your routes here
];

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimations() // Include if using Angular animations
  ]
};
