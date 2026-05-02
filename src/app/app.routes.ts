import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { HousingDetailsComponent } from './features/housing-details/housing-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'HomeFinder',
  },
  {
    path: 'details/:id',
    component: HousingDetailsComponent,
    title: 'Housing Details',
  },
];