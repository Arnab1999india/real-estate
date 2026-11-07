import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PROPERTIES } from './mock-data/properties';
import { PropertyCardsComponent } from './components/property-cards/property-cards.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PropertyCardsComponent,
    AboutComponent,
    HomeComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rs-app';
  public properties = PROPERTIES;
}
