import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [
    { id: 0, name: 'Sunset Garden Apartments', city: 'Chicago', state: 'IL', photo: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994', availableUnits: 3, wifi: true, laundry: true },
    { id: 1, name: 'Olive View Residence', city: 'Seattle', state: 'WA', photo: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be', availableUnits: 5, wifi: true, laundry: false },
    { id: 2, name: 'Blue Stone Homes', city: 'Austin', state: 'TX', photo: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6', availableUnits: 2, wifi: false, laundry: true },
    { id: 3, name: 'Modern Life Housing', city: 'Denver', state: 'CO', photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', availableUnits: 7, wifi: true, laundry: true },
    { id: 4, name: 'Peace Valley Flats', city: 'Boston', state: 'MA', photo: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c', availableUnits: 1, wifi: true, laundry: false },
    { id: 5, name: 'Golden Roof Residence', city: 'Miami', state: 'FL', photo: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3', availableUnits: 4, wifi: false, laundry: true },
    { id: 6, name: 'Cloud Nine Apartments', city: 'Portland', state: 'OR', photo: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde', availableUnits: 8, wifi: true, laundry: true },
    { id: 7, name: 'Lavender Home Suites', city: 'San Diego', state: 'CA', photo: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc', availableUnits: 6, wifi: true, laundry: false },
    { id: 8, name: 'City Center Housing', city: 'New York', state: 'NY', photo: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b', availableUnits: 0, wifi: true, laundry: true },
    { id: 9, name: 'Mountain Edge Homes', city: 'Salt Lake City', state: 'UT', photo: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea', availableUnits: 2, wifi: false, laundry: false },
    { id: 10, name: 'Bright Corner Flats', city: 'Phoenix', state: 'AZ', photo: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d', availableUnits: 9, wifi: true, laundry: true },
    { id: 11, name: 'Palm Street Residence', city: 'Los Angeles', state: 'CA', photo: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb', availableUnits: 3, wifi: true, laundry: false },
    { id: 12, name: 'White Pearl Housing', city: 'Dallas', state: 'TX', photo: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d', availableUnits: 5, wifi: false, laundry: true },
    { id: 13, name: 'Dream Nest Apartments', city: 'Atlanta', state: 'GA', photo: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea', availableUnits: 1, wifi: true, laundry: true },
    { id: 14, name: 'Cozy Corner Residence', city: 'San Francisco', state: 'CA', photo: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1', availableUnits: 4, wifi: true, laundry: true },
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(house => house.id === id);
  }
}