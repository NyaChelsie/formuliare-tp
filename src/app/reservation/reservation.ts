import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Client {
  nom: string;
  email: string;
  telephone: string;
}

interface Sejour {
  dateArrivee: string;
  dateDepart: string;
  nombrePersonnes: number | null;
  typeChambre: string;
}

interface Transfert {
  numeroVol: string;
  heureArrivee: string;
}

interface ReservationHotel {
  client: Client;
  sejour: Sejour;
  transfertDemande: boolean;
  transfert: Transfert;
}

@Component({
  selector: 'app-reservation',
  imports: [FormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css',
})
export class Reservation {
  reservation: ReservationHotel = this.modeleVide();

  private modeleVide(): ReservationHotel {
    return {
      client: { nom: '', email: '', telephone: '' },
      sejour: { dateArrivee: '', dateDepart: '', nombrePersonnes: null, typeChambre: '' },
      transfertDemande: false,
      transfert: { numeroVol: '', heureArrivee: '' },
    };
  }

  onSubmit(formulaire: NgForm) {
    console.log('Réservation :', JSON.parse(JSON.stringify(this.reservation)));
    console.log('Arbre du formulaire :', formulaire.value);
    this.reservation = this.modeleVide();
    formulaire.resetForm(this.reservation);
  }
}
