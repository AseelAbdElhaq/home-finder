# HomeFinder

HomeFinder is a simple Angular housing application that helps users browse available housing options, search by city, view housing details, and submit an application form.

## Features

- Browse housing cards on the home page
- Search housing by city
- View detailed housing information
- Show availability, WiFi, and laundry status
- Disable application button when a house is fully booked
- Favorite button on housing cards
- Modern Angular control flow using `@if` and `@for`
- Clean Angular folder structure

## Tech Stack

- Angular
- TypeScript
- HTML
- CSS

## Project Structure

```text
src/app/
├── core/
│   └── services/
│       └── housing.service.ts
├── models/
│   └── housing-location.model.ts
├── features/
│   ├── home/
│   ├── housing-card/
│   └── housing-details/
├── app.ts
├── app.html
├── app.css
└── app.routes.ts