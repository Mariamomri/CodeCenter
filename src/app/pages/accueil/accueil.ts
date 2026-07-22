import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {

  inscriptionsOuvertes = signal(true);
}
