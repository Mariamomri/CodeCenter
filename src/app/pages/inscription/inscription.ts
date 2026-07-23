import { Component , inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Stagiaire } from '../../services/stagiaire';

@Component({
  selector: 'app-inscription',
  imports: [FormsModule],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',

})
export class Inscription {

  service = inject(Stagiaire);

  valider() {
  console.log('Inscription validée', this.service.nom, this.service.prenom);
}
}
