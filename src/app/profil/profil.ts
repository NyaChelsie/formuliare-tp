import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface InformationsPersonnelles {
  nom: string;
  prenom: string;
  dateNaissance: string;
}

interface Adresse {
  rue: string;
  ville: string;
  codePostal: string;
}

interface ProfilUtilisateur {
  informationsPersonnelles: InformationsPersonnelles;
  adresse: Adresse;
}

@Component({
  selector: 'app-profil',
  imports: [FormsModule],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class Profil {
  profil: ProfilUtilisateur = {
    informationsPersonnelles: { nom: '', prenom: '', dateNaissance: '' },
    adresse: { rue: '', ville: '', codePostal: '' },
  };

  onSubmit(formulaire: NgForm) {
    console.log('Profil :', JSON.parse(JSON.stringify(this.profil)));
    console.log('Arbre du formulaire :', formulaire.value);
    formulaire.resetForm({
      informationsPersonnelles: { nom: '', prenom: '', dateNaissance: '' },
      adresse: { rue: '', ville: '', codePostal: '' },
    });
  }
}
