import { Component, HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
      navLinks.classList.toggle('active');
    } else {
      console.error("Elemento 'navLinks' não encontrado.");
    }
  }

  // Usa HostListener para detectar cliques fora do menu
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (navLinks && !navLinks.contains(event.target as Node) && !menuIcon?.contains(event.target as Node)) {
      navLinks.classList.remove('active');
    }
  }
}
