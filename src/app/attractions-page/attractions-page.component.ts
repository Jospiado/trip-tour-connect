import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AttractionDetailComponent } from '../attraction-detail/attraction-detail.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

interface Attraction {
  id?: string;
  name: string;
  category: string;
  location: string;
  price: number;
  rating: number;
}

@Component({
  selector: 'app-attractions-page',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatInputModule, MatCardModule, FormsModule, RouterModule, MatDialogModule],
  templateUrl: './attractions-page.component.html',
  styleUrls: ['./attractions-page.component.css']
})
export class AttractionsPageComponent {

  attractions: Attraction[] = [
    { id: "1", name: 'Cachoeira Encantada', category: 'Natureza', location: 'Montanha', price: 50, rating: 4.5 },
    { id: "2", name: 'Museu de Arte', category: 'Cultura', location: 'Centro', price: 20, rating: 4.2 },
    { id: "3", name: 'Praia do Sol', category: 'Praia', location: 'Litoral', price: 0, rating: 4.8 },
    // Adicione outras atrações conforme necessário
  ];

  filteredAttractions: Attraction[] = [...this.attractions];
  selectedCategory = '';
  searchText = '';

  constructor(private dialog: MatDialog,private route: ActivatedRoute) {}
  ngOnInit() {
    // Carrega as atrações do localStorage
    const storedAttractions = JSON.parse(localStorage.getItem('attractions') || '[]');
    this.attractions = storedAttractions.length ? storedAttractions : this.attractions;
    this.filteredAttractions = [...this.attractions];

    // Captura o ID da URL e configura os campos de busca
    this.route.queryParams.subscribe(params => {
      const attractionId = params['id'];
      if (attractionId) {
        // Procura o atrativo com o ID correspondente
        const attraction = this.attractions.find(attr => attr.id === attractionId);
        if (attraction) {
          // Define os valores de pesquisa e categoria
          this.searchText = attraction.name;
          this.selectedCategory = attraction.category;
          this.filterAttractions(); // Aplica o filtro
        }
      }
    });
  }

  // Método para abrir o diálogo de detalhes da atração
  openAttractionDetail(attractionId: string | undefined) {
    this.dialog.open(AttractionDetailComponent, {
      data: { id: attractionId },
      width: '600px'
    });
  }

  // Método para filtrar atrações com base na categoria e no texto de busca
  filterAttractions() {
    this.filteredAttractions = this.attractions.filter(attraction => {
      return (
        (!this.selectedCategory || attraction.category === this.selectedCategory) &&
        (!this.searchText || attraction.name.toLowerCase().includes(this.searchText.toLowerCase()))
      );
    });
  }
}
