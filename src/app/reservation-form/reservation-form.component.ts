import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
export interface Experience {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  participants: number;
  images: string[];
}

export interface Reservation {
  id: string;
  experience: string;
  date: string;
  people: number;
}

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [CommonModule, FormsModule,MatButtonModule,FormsModule,MatFormFieldModule,MatInputModule,
],
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  reservation = {
    id: '', // O ID pode ser gerado automaticamente
    experience: '',
    date: '',
    people: 1
  };

  constructor(
    private dialogRef: MatDialogRef<ReservationFormComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  experienceName: string = ''; // Nome da experiência para exibição

  ngOnInit() {
 
    // Carrega as experiências do localStorage e encontra a que corresponde ao experienceId
    const storedExperiences = JSON.parse(localStorage.getItem('experiences') || '[]');
    const experience = storedExperiences.find((exp: Experience) => exp.id === this.data.experienceId);
    if (experience) {
      this.reservation.experience = experience.name; // Define o ID da experiência na reserva
      this.experienceName = experience.name; // Define o nome da experiência para exibição
    }
  }

  saveReservation() {
    // Carrega as reservas existentes do localStorage ou inicia um array vazio
    const reservations: Reservation[] = JSON.parse(localStorage.getItem('reservations') || '[]');

    // Define um novo ID para a reserva
    this.reservation.id = (reservations.length + 1).toString();

    // Adiciona a nova reserva ao array
    reservations.push(this.reservation);

    // Salva o array atualizado no localStorage
    localStorage.setItem('reservations', JSON.stringify(reservations));

    console.log('Reserva salva:', this.reservation);

    // Fecha o pop-up
    this.dialogRef.close();
    this.router.navigate(['/reservations-page']);
  }

  cancel() {
    this.dialogRef.close(); // Fecha o pop-up ao cancelar
  }
}
