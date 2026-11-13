
import { Evenement } from '../modeles/evenement';

export const EVENEMENTS: Evenement[] = [
  {
    id: 1,
    titre: 'Workshop Angular',
    description: 'Une introduction pratique au framework Angular.',
    categorie: 'atelier',
    club: 'Club Informatique',
    date: new Date('2026-12-10'),
    lieu: 'ISET Rades',
    capacite: 30,
    placesReservees: 10,
    gratuit: true
  },
  {
    id: 2,
    titre: 'Conférence Intelligence Artificielle',
    description: 'Découvrez les dernières avancées de l’intelligence artificielle.',
    categorie: 'conference',
    club: 'Club Robotique',
    date: new Date('2026-12-15'),
    lieu: 'Amphithéâtre ISET Rades',
    capacite: 100,
    placesReservees: 100,
    gratuit: true
  },
  {
    id: 3,
    titre: 'Hackathon 2026',
    description: 'Un défi de programmation en équipe pendant 24 heures.',
    categorie: 'competition',
    club: 'Club Informatique',
    date: new Date('2026-12-20'),
    lieu: 'Laboratoire informatique',
    capacite: 40,
    placesReservees: 39,
    gratuit: true
  },
  {
    id: 4,
    titre: 'Sortie à Sidi Bou Said',
    description: 'Une journée de découverte et de détente entre étudiants.',
    categorie: 'sortie',
    club: 'Club Culturel',
    date: new Date('2026-12-05'),
    lieu: 'Sidi Bou Said',
    capacite: 25,
    placesReservees: 12,
    gratuit: false
  },
  {
    id: 5,
    titre: 'Workshop Python',
    description: 'Apprenez les bases de Python à travers des exercices pratiques.',
    categorie: 'atelier',
    club: 'Club Programmation',
    date: new Date('2026-12-25'),
    lieu: 'Salle TP 3',
    capacite: 20,
    placesReservees: 5,
    gratuit: true
  },
  {
    id: 6,
    titre: 'Conférence Entrepreneuriat',
    description: 'Des entrepreneurs partagent leurs expériences et conseils.',
    categorie: 'conference',
    club: 'Club Enactus',
    date: new Date('2026-11-05'),
    lieu: 'ISET Rades',
    capacite: 80,
    placesReservees: 45,
    gratuit: false
  },
  {
    id: 7,
    titre: 'Tournoi Gaming',
    description: 'Une compétition gaming ouverte aux étudiants.',
    categorie: 'competition',
    club: 'Club Gaming',
    date: new Date('2026-12-28'),
    lieu: 'Salle polyvalente',
    capacite: 50,
    placesReservees: 20,
    gratuit: false
  },
  {
    id: 8,
    titre: 'Sortie au musée du Bardo',
    description: 'Une visite culturelle pour découvrir le patrimoine tunisien.',
    categorie: 'sortie',
    club: 'Club Culturel',
    date: new Date('2026-10-15'),
    lieu: 'Musée national du Bardo',
    capacite: 30,
    placesReservees: 25,
    gratuit: false
  }
];
