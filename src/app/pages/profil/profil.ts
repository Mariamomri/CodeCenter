import { Component , inject } from '@angular/core';
import { Stagiaire } from '../../services/stagiaire';


@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class Profil {
  service = inject(Stagiaire);


  niveau = 'debutant';

  niveaux = ['debutant', 'intermediaire', 'avance'];


}
