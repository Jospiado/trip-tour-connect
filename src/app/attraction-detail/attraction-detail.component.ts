import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { RecentReviewsComponent } from '../recent-reviews/recent-reviews.component';

@Component({
  selector: 'app-attraction-detail',
  templateUrl: './attraction-detail.component.html',
  styleUrls: ['./attraction-detail.component.css'],
  standalone: true,
  imports: [RecentReviewsComponent,MatIconModule, CommonModule, MatDialogModule, MatButtonModule, RouterModule]
})
export class AttractionDetailComponent implements OnInit {
  attractionId: string | undefined;
  attraction: any;
  relatedExperiences: any[] = []; // Armazena as experiências relacionadas

  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AttractionDetailComponent>
  ) {
    this.attractionId = data.id;
  }

  ngOnInit() {
    // Carrega o detalhe do atrativo e suas experiências do localStorage
    this.attraction = this.getAttractionDetails(this.attractionId);

    if (this.attraction && this.attraction.experiences) {
      this.addExperiencesToLocalStorage(this.attraction.experiences);
    }
  }
  getAttractionDetails(id: string | undefined) {
    if (!id) {
      return null; // Retorna null se o ID for indefinido
    }
  
    // Carrega as atrações do localStorage
    const storedAttractions = JSON.parse(localStorage.getItem('attractions') || '[]');
  
    // Encontra a atração correspondente pelo ID
    const attraction = storedAttractions.find((attr: any) => attr.id === id);
  
    // Retorna a atração encontrada ou null se não existir
    return attraction || null;
  }
  addExperiencesToLocalStorage(experiences: any[]) {
    // Carrega as experiências existentes no localStorage
    const storedExperiences = JSON.parse(localStorage.getItem('experiences') || '[]');

    // Filtra para adicionar apenas as novas experiências relacionadas ao attractionId
    const newExperiences = experiences.filter(exp => !storedExperiences.some((e: any) => e.id === exp.id));
    // Adiciona as novas experiências ao localStorage
    localStorage.setItem('experiences', JSON.stringify([...storedExperiences, ...newExperiences]));
  }

  getWhatsAppLink(): string {
    const phoneNumber = '5545988095733'; // Substitua pelo número desejado
    const message = `Olá! Gostaria de saber mais sobre o atrativo ${this.attraction.name}.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }

  getGoogleMapsLink(): string {
    const { latitude, longitude } = this.attraction;
    return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  }

  reserveExperience() {
    // Fecha o modal e navega para a página de experiências
    this.dialogRef.close();
    this.router.navigate(['/experiences-page'], { queryParams: { attractionId: this.attractionId } });
  }
}
