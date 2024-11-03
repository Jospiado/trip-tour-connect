import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() images: string[] = []; // Recebe a lista de imagens como parâmetro
  desiredHeight = '2000px'; // Ajuste conforme necessário

  currentIndex = 0;
  slideDirection: string | null = null;

  nextImage() {
    this.slideDirection = null; // Resetar a direção momentaneamente
    setTimeout(() => {
      this.slideDirection = 'next';
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 50); // Atraso breve para permitir reset
  }

  prevImage() {
    this.slideDirection = null; // Resetar a direção momentaneamente
    setTimeout(() => {
      this.slideDirection = 'prev';
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }, 50); // Atraso breve para permitir reset
  }
}
