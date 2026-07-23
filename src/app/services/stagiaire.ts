import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Stagiaire {
  nom = '';
  prenom = '';
  email = '';
  formationChoisie = '';

  niveau = 'debutant';
  niveaux = ['debutant', 'intermediaire', 'avance'];

  changerNiveau() {
    const posizioneAttuale = this.niveaux.indexOf(this.niveau);
    const posizioneSuccessiva = (posizioneAttuale + 1) % this.niveaux.length;
    this.niveau = this.niveaux[posizioneSuccessiva];
  }

  nombreInscriptions = signal(0);

  ajouterInscription() {
    this.nombreInscriptions.update(n => n + 1);
  }

}
