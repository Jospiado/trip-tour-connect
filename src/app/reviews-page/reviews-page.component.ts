import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

interface Review {
  user: string;
  rating: number;
  comment: string;
  date: Date;
}

@Component({
  selector: 'app-reviews-page',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.css']
})
export class ReviewsPageComponent {
  reviews: Review[] = [
    { user: 'Ana', rating: 5, comment: 'Lugar incrível!', date: new Date('2024-10-10') },
    { user: 'Carlos', rating: 4, comment: 'Ótima experiência, mas poderia ter mais opções de atividades.', date: new Date('2024-10-12') }
    // Outras avaliações podem ser adicionadas aqui
  ];

  newReview: Review = { user: '', rating: 0, comment: '', date: new Date() };
  selectedFilter = 'recent';

  addReview() {
    this.newReview.date = new Date();
    this.reviews.unshift(this.newReview);
    this.newReview = { user: '', rating: 0, comment: '', date: new Date() }; // Limpar o formulário
  }

  getFilteredReviews() {
    return this.selectedFilter === 'recent'
      ? this.reviews.sort((a, b) => b.date.getTime() - a.date.getTime())
      : this.reviews.sort((a, b) => b.rating - a.rating);
  }
}
