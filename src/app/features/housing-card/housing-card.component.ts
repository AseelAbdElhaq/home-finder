import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HousingLocation } from '../../models/housing-location.model';

@Component({
  selector: 'app-housing-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './housing-card.component.html',
  styleUrl: './housing-card.component.css',
})
export class HousingCardComponent {
  @Input() housingLocation!: HousingLocation;

  isFavorite = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}