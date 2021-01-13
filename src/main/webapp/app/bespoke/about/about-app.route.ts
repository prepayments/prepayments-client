import { Route } from '@angular/router';
import { AboutComponent } from 'app/bespoke/about/about.component';

/**
 * Route for the about component
 */
export const ABOUT_APP_ROUTE: Route = {
  path: 'about/prepayments',
  component: AboutComponent,
  data: {
    authorities: [],
    pageTitle: 'Prepayments System',
  },
};
