import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta-buttons',
  standalone: true,
  imports: [CommonModule, MatButtonModule,RouterModule],
  templateUrl: './cta-buttons.component.html',
  styleUrls: ['./cta-buttons.component.css']
})
export class CtaButtonsComponent {
  exploreLink = '/attractions-page';  // Substitua pelo link real
  reserveLink = '/experiences-page'; // Substitua pelo link real
}
