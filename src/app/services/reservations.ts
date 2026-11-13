import { Injectable, signal } from '@angular/core';
import { Reservation } from '../modeles/reservation';

@Injectable({
  providedIn: 'root'
})
export class Reservations {
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