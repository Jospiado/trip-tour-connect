import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-reviews',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './recent-reviews.component.html',
  styleUrls: ['./recent-reviews.component.css']
})
export class RecentReviewsComponent {
  reviews = [
    {
      user: 'Ana Maria',
      comment: 'Lugar maravilhoso, com vista incrível e serviço excelente!',
      rating: 5
    },
    {
      user: 'Carlos Souza',
      comment: 'Ambiente agradável e equipe atenciosa. Recomendo!',
      rating: 4
    },
    {
      user: 'Mariana Gomes',
      comment: 'Experiência única, mas poderia ter mais opções de atividades.',
      rating: 3
    },
    // Adicione outras avaliações conforme necessário
  ];
}
