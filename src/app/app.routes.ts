
import { Routes } from '@angular/router';

import { ListeEvenements } from './pages/liste-evenements/liste-evenements';

export const routes: Routes = [
  {
    path: 'evenements',
    component: ListeEvenements
  },
  {
    path: 'connexion',
    loadComponent: () =>
      import('./pages/connexion/connexion')
        .then(m => m.Connexion)
  },
  {
    path: 'mes-reservations',
    loadComponent: () =>
      import('./pages/mes-reservations/mes-reservations')
        .then(m => m.MesReservations)
  },
  {
    path: 'nouvel-evenement',
    loadComponent: () =>
      import('./pages/nouvel-evenement/nouvel-evenement')
        .then(m => m.NouvelEvenement)
  },
  {
    path: 'evenements/:id',
    loadComponent: () =>
      import('./pages/detail-evenement/detail-evenement')
        .then(m => m.DetailEvenement)
  },
  {
    path: '',
    redirectTo: 'evenements',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'evenements'
  }
];