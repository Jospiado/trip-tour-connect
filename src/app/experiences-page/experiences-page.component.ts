import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { MatDialog } from '@angular/material/dialog';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ActivatedRoute } from '@angular/router';

interface Experience {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  participants: number;
  images: string[];
}

@Component({
  selector: 'app-experiences-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule,CarouselComponent],
  templateUrl: './experiences-page.component.html',
  styleUrls: ['./experiences-page.component.css']
})
export class ExperiencesPageComponent {
  constructor(private dialog: MatDialog,private route: ActivatedRoute) {}
  experiences: any[] = [];

  ngOnInit() {
    // Carrega as atrações do localStorage
    const storedAttractions = JSON.parse(localStorage.getItem('attractions') || '[]');
    const storedExperiences = JSON.parse(localStorage.getItem('experiences') || '[]');
    
    // Obtém o attractionId dos parâmetros de consulta
    this.route.queryParams.subscribe(params => {
      const attractionId = params['attractionId'];

      // Busca o attraction com o attractionId correspondente
      const attraction = storedAttractions.find((attr: any) => attr.id === attractionId);

      // Se o attraction existir e tiver experiências, exibe apenas essas experiências
      if (attraction && attraction.experiences) {
        this.experiences = attraction.experiences;
      } else {
        // Caso contrário, exibe todas as experiências do localStorage
        this.experiences = storedExperiences;
      }
    });
  }

  makeReservation(experienceId: string) {
    this.dialog.open(ReservationFormComponent, {
      data: { experienceId },
      width: '500px'
    });
  }
}
