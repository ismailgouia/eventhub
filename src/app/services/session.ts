import { Injectable, signal, computed } from '@angular/core';
import { Utilisateur } from '../modeles/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class Session {

  private utilisateurConnecte = signal<Utilisateur | null>(null);

  readonly utilisateur = this.utilisateurConnecte.asReadonly();

  readonly estConnecte = computed(() => this.utilisateur() !== null);

  readonly estOrganisateur = computed(
    () => this.utilisateur()?.role === 'organisateur'
  );

  connecter(utilisateur: Utilisateur): void {
    this.utilisateurConnecte.set(utilisateur);
  }

  deconnecter(): void {
    this.utilisateurConnecte.set(null);
  }
}