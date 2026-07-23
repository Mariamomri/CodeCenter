import { Component, inject } from '@angular/core';
import { Stagiaire } from '../../services/stagiaire';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  service = inject(Stagiaire);
}
