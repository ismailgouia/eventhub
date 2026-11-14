import { Injectable, signal, computed, inject } from '@angular/core';
import { Reservation } from '../modeles/reservation';
import { Session } from './session';

@Injectable({
  providedIn: 'root'
})
export class Reservations {
    private session = inject(Session);

    readonly nombreReservations = computed(() => {
      const email = this.session.utilisateur()?.email;
      if (!email) {
        return 0;
      }
       return this.getReservationsParEmail(email).length;
    });

    private reservations = signal<Reservation[]>([]);

    readonly listeReservations = this.reservations.asReadonly();

    ajouterReservation(reservation: Reservation): void {
      this.reservations.update(liste => [
      ...liste,
      reservation
      ]);
    }

    getReservationsParEmail(email: string): Reservation[] {
      return this.listeReservations().filter(
      reservation => reservation.email === email
    );
    }

}