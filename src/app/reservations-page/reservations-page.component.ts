import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';

interface Reservation {
  id: string;
  experience: string;
  date: string;
  people: number;
}

@Component({
  selector: 'app-reservations-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './reservations-page.component.html',
  styleUrls: ['./reservations-page.component.css']
})
export class ReservationsPageComponent {
  reservations: Reservation[] = [];


  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    // Carregar as reservas do localStorage ao iniciar o componente
    const storedReservations = localStorage.getItem('reservations');
    if (storedReservations) {
      this.reservations = JSON.parse(storedReservations);
    } else {
      // Usa as reservas iniciais, se não houver dados no localStorage
      this.reservations = [
        { id: '1', experience: 'Passeio de Balão', date: '2024-12-01', people: 2 },
        { id: '2', experience: 'Workshop de Fotografia', date: '2024-12-10', people: 1 }
      ];
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }
  }

  openReservationForm() {
    const dialogRef = this.dialog.open(ReservationFormComponent);

    dialogRef.afterClosed().subscribe((newReservation: Reservation | undefined) => {
      if (newReservation) {
        // Define um novo ID para a reserva
        newReservation.id = (this.reservations.length + 1).toString();

        // Adiciona a nova reserva ao array e atualiza o localStorage
        this.reservations.push(newReservation);
        localStorage.setItem('reservations', JSON.stringify(this.reservations));
      }
    });
  }

  cancelReservation(id: string) {
    this.reservations = this.reservations.filter(reservation => reservation.id !== id);
  }

  rescheduleReservation(id: string) {
    // Função para re-agendar reserva (poderia reabrir o formulário)
    const reservation = this.reservations.find(reservation => reservation.id === id);
    if (reservation) {
      this.openReservationForm();
    }
  }
}
