import { NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-accueil',
  imports: [NgStyle],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {

  inscriptionsOuvertes = signal(true);

  couleurTitre = 'blue';
  couleurs = ['blue', 'green', 'red'];

  changerCouleur(){
    const posizioneAttuale = this.couleurs.indexOf(this.couleurTitre);
    const posizioneSuccessiva = (posizioneAttuale + 1) % this.couleurs.length;
    this.couleurTitre = this.couleurs[posizioneSuccessiva];
    
    //     Riga 1: "Guarda dentro l'array couleurs, e dimmi a che posizione si trova il colore che sto usando ora (couleurTitre)." → il risultato è un numero: 0, 1 o 2.

    // Riga 2: "Prendi quel numero, aggiungi 1, e se superi la fine dell'array (3 elementi), ricomincia da 0." → questo è esattamente ciò che fa %. Non devi scrivere nessun controllo manuale, la formula lo fa automaticamente per qualsiasi posizione.

    // Riga 3: "Vai nell'array couleurs a quella nuova posizione, e prendi il colore che c'è lì. Mettilo come nuovo couleurTitre."
}
}