import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface DemandeInscription {
  nomComplet: string;
  email: string;
  places: number | null;
  conditions: boolean;
}

@Component({
  selector: 'app-inscription',
  imports: [FormsModule],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {
  inscription: DemandeInscription = {
    nomComplet: '',
    email: '',
    places: null,
    conditions: false,
  };

  onSubmit(formulaire: NgForm) {
    console.log('Inscription :', { ...this.inscription });
    formulaire.resetForm({ nomComplet: '', email: '', places: null, conditions: false });
  }
}
