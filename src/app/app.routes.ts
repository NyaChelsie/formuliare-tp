import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Inscription } from './inscription/inscription';
import { Profil } from './profil/profil';
import { Reservation } from './reservation/reservation';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive';

export const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'contact', component: Contact },
  { path: 'inscription', component: Inscription },
  { path: 'profil', component: Profil },
  { path: 'reservation', component: Reservation },
  { path: 'contact-reactive', component: ContactReactiveComponent },
];