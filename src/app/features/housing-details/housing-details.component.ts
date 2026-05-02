import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { HousingLocation } from '../../models/housing-location.model';
import { HousingService } from '../../core/services/housing.service';

@Component({
  selector: 'app-housing-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './housing-details.component.html',
  styleUrl: './housing-details.component.css',
})
export class HousingDetailsComponent {
  housingLocation: HousingLocation | undefined;

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {
    const id = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log('Application submitted:', firstName, lastName, email);
  }
}