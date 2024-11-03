import { Routes } from '@angular/router';
import { AttractionsPageComponent } from './attractions-page/attractions-page.component';
import { AttractionDetailComponent } from './attraction-detail/attraction-detail.component';
import { AppComponent } from './app.component';
import { ExperiencesPageComponent } from './experiences-page/experiences-page.component';
import { ReservationsPageComponent } from './reservations-page/reservations-page.component';
import { RecentReviewsComponent } from './recent-reviews/recent-reviews.component';
import { ReviewsPageComponent } from './reviews-page/reviews-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FeaturedAttractionsComponent } from './featured-attractions/featured-attractions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

export const routes: Routes = [
  { path: 'home', component: FeaturedAttractionsComponent },
  { path: 'attractions', component: AttractionsPageComponent },
  { path: 'attractions-page/:id', component: AttractionDetailComponent },
  { path: 'attractions/:id', component: AttractionDetailComponent },
  { path: 'attractions-page', component: AttractionsPageComponent },
  { path: 'experiences-page', component: ExperiencesPageComponent },
  { path: 'experiences-page/:id', component: ExperiencesPageComponent },
  { path: 'reservations-page', component: ReservationsPageComponent },
  { path: 'reservations-form', component: ReservationFormComponent },
  { path: 'reservations-form/:id', component: ReservationFormComponent },
  { path: 'recent-reviews', component: RecentReviewsComponent },
  { path: 'reviews-page', component: ReviewsPageComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para a página inicial
  { path: '**', redirectTo: '/home' }, // Redireciona para a página inicial caso a rota não exista

  // Outras rotas podem ser adicionadas aqui
];
