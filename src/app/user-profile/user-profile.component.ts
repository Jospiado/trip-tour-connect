import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

interface User {
  name: string;
  email: string;
  preferences: string;
}

interface Activity {
  type: string;
  description: string;
  date: Date;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatCardModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: User = {
    name: 'João Silva',
    email: 'joao.silva@example.com',
    preferences: 'Aventureiro, amante de trilhas e natureza'
  };

  activities: Activity[] = [
    { type: 'Reserva', description: 'Passeio de Balão', date: new Date('2024-10-10') },
    { type: 'Avaliação', description: 'Ótima experiência em cachoeira', date: new Date('2024-10-12') }
    // Outras atividades podem ser adicionadas aqui
  ];

  editMode = false;

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    this.editMode = false;
    alert('Alterações salvas!');
  }

  logout() {
    alert('Usuário deslogado!');
    // Aqui você pode adicionar a lógica de logout real
  }

  deleteAccount() {
    if (confirm('Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.')) {
      alert('Conta excluída com sucesso.');
      // Aqui você pode adicionar a lógica de exclusão de conta real
    }
  }
}
