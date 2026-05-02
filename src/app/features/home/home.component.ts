import { Component } from '@angular/core';

import { HousingLocation } from '../../models/housing-location.model';
import { HousingService } from '../../core/services/housing.service';
import { HousingCardComponent } from '../housing-card/housing-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  constructor(private housingService: HousingService) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(house =>
      house.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}