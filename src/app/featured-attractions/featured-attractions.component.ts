import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { CtaButtonsComponent } from '../cta-buttons/cta-buttons.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-attractions',
  standalone: true,
  imports: [CommonModule, MatCardModule, CtaButtonsComponent, CarouselComponent],
  templateUrl: './featured-attractions.component.html',
  styleUrls: ['./featured-attractions.component.css']
})
export class FeaturedAttractionsComponent {
  images = [
    'imagem1.jpg', // Substitua com o caminho correto das suas imagens
    'imagem3.jpg'
  ];

   attractions = [
    {
      id: '1',
      price: 70,
      rating:4,
      image: 'rotadafe.jpeg', 
      latitude: '-25.498239',
      longitude: '-54.552059', 
      name: 'Rota da Fé',
      description: 'Uma jornada espiritual por lugares de devoção e fé.',
      category: 'Cultural',
      experiences: [
        { id: '1', name: 'Trilha da Cachoeira', duration: '2 horas', price: 50, participants: 10, images: ['trilha_cachoeira1.jpg', 'trilha_cachoeira2.jpg'] },
        { id: '2', name: 'Picnic na Cachoeira', duration: '1 hora', price: 30, participants: 5, images: ['picnic_cachoeira1.jpg', 'picnic_cachoeira2.jpg'] }
      ]
    },
    {
      id: '2',
      price: 80,
      rating:3.5,
      image: 'pioneiros.jpeg',
      latitude: '-24.789148',
      longitude: '-54.370681',
      name: 'Rota dos Pioneiros',
      description: 'Uma aventura pelas trilhas dos primeiros desbravadores.',
      category: 'Histórico',
      experiences: [
        { id: '3', name: 'Trilha dos Pioneiros', duration: '3 horas', price: 40, participants: 8, images: ['trilha_pioneiros1.jpg', 'trilha_pioneiros2.jpg'] },
        { id: '4', name: 'Passeio Cultural', duration: '2 horas', price: 35, participants: 12, images: ['passeio_cultural1.jpg', 'passeio_cultural2.jpg'] }
      ]
    },
    {
      id: '3',
      price: 90,
      rating:4.5,
      image: 'coluna_prestes.jpeg',
      latitude: '-24.903118',
      longitude: '-54.211697',
      name: 'Caminho Coluna Prestes',
      description: 'Reviva a história da Coluna Prestes por esta rota lendária.',
      category: 'Histórico',
      experiences: [
        { id: '5', name: 'Caminhada Histórica', duration: '4 horas', price: 60, participants: 15, images: ['caminhada_historica1.jpg', 'caminhada_historica2.jpg'] },
        { id: '6', name: 'Palestra Histórica', duration: '1.5 horas', price: 20, participants: 25, images: ['palestra_historica1.jpg', 'palestra_historica2.jpg'] }
      ]
    },
    {
      id: '4',
      price: 60,
      rating:5,
      image: 'cataratas_iguacu.jpeg',
      latitude: '-25.695212',
      longitude: '-54.436831',
      name: 'Cataratas do Iguaçu',
      description: 'Maravilhe-se com a grandiosidade das famosas cataratas.',
      category: 'Natural',
      experiences: [
        { id: '7', name: 'Passeio de Barco', duration: '1 hora', price: 80, participants: 20, images: ['passeio_barco1.jpg', 'passeio_barco2.jpg'] },
        { id: '8', name: 'Tour Guiado nas Cataratas', duration: '2 horas', price: 100, participants: 15, images: ['tour_cataratas1.jpg', 'tour_cataratas2.jpg'] }
      ]
    },
    {
      id: '5',
      price: 30,
      rating:4,
      image: 'eco_rural.jpeg',
      latitude: '-25.116760',
      longitude: '-53.968265',
      name: 'Circuito Eco Rural',
      description: 'Um mergulho na vida rural com atividades ecológicas.',
      category: 'Rural',
      experiences: [
        { id: '9', name: 'Fazenda Educativa', duration: '2 horas', price: 50, participants: 10, images: ['fazenda_educativa1.jpg', 'fazenda_educativa2.jpg'] },
        { id: '10', name: 'Plantio Sustentável', duration: '1.5 horas', price: 30, participants: 8, images: ['plantio_sustentavel1.jpeg', 'plantio_sustentavel2.jpg'] }
      ]
    },
    {
      id: '6',
      rating:3,
      price: 50,
      image: 'germanico_aventura.jpeg',
      latitude: '-24.568503',
      longitude: '-54.036262',
      name: 'Circuito Germânico e de Aventura',
      description: 'Aventure-se pelas tradições germânicas e atividades emocionantes.',
      category: 'Aventura',
      experiences: [
        { id: '11', name: 'Escalada Alemã', duration: '2.5 horas', price: 90, participants: 12, images: ['escalada_alema1.jpg', 'escalada_alema2.jpg'] },
        { id: '12', name: 'Piquenique Germânico', duration: '1 hora', price: 20, participants: 10, images: ['piquenique_germanico1.jpg', 'piquenique_germanico2.jpg'] }
      ]
    }
  ];  

  constructor(private router: Router) {}

  ngOnInit() {
    // Salva as atrações no localStorage
    localStorage.setItem('attractions', JSON.stringify(this.attractions));
  }

  goToAttractionPage(attractionId: string) {
    console.log(attractionId)
    this.router.navigate(['/attractions'], { queryParams: { id: attractionId } });
  }
}
