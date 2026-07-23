import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Stagiaire {
  nom = '';
  prenom = '';
  email = '';
  formationChoisie = '';
}
