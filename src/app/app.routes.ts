import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { Formations } from './pages/formations/formations';
import { Inscription } from './pages/inscription/inscription';
import { Profil } from './pages/profil/profil';
import { Dashboard } from './pages/dashboard/dashboard';


export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'formations', component: Formations },
  { path: 'inscription', component: Inscription },
  { path: 'profil', component: Profil },
  { path: 'dashboard', component: Dashboard },
];
