import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface MessageContact {
  nom: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contact: MessageContact = { nom: '', email: '', message: '' };

  onSubmit(formulaire: NgForm) {
    console.log('Données saisies :', { ...this.contact });
    formulaire.resetForm({ nom: '', email: '', message: '' });
  }
}
