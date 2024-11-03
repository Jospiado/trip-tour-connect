import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FeaturedAttractionsComponent } from './featured-attractions/featured-attractions.component';
import { RecentReviewsComponent } from './recent-reviews/recent-reviews.component';
import { AttractionsPageComponent } from './attractions-page/attractions-page.component';
import { ExperiencesPageComponent } from './experiences-page/experiences-page.component';
import { ReservationsPageComponent } from './reservations-page/reservations-page.component';
import { ReviewsPageComponent } from "./reviews-page/reviews-page.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, FeaturedAttractionsComponent, RecentReviewsComponent, AttractionsPageComponent, ExperiencesPageComponent, ReservationsPageComponent, ReviewsPageComponent, ReviewsPageComponent, UserProfileComponent,UserProfileComponent,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'meu-projeto';
}
