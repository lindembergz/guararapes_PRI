import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsListComponent } from './components/film/film-list/films-list.component';
import { FilmDetailsComponent } from './components/film/film-details/film-details.component';
import { AddFilmComponent } from './components/film/film-add/film-add.component';

import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { PeopleDetailsComponent } from './components/people/people-details/people-details.component';
import { AddPeopleComponent } from './components/people/people-add/people-add.component';

import { PlanetsListComponent } from './components/planet/planet-list/planets-list.component';
import { PlanetDetailsComponent } from './components/planet/planet-details/planet-details.component';
import { AddPlanetComponent } from './components/planet/planet-add/planet-add.component';

import { SpeciesListComponent } from './components/specie/specie-list/species-list.component';
import { SpecieDetailsComponent } from './components/specie/specie-details/specie-details.component';
import { AddSpecieComponent } from './components/specie/specie-add/specie-add.component';

import { StarShipsListComponent } from './components/starship/starship-list/starships-list.component';
import { StarShipDetailsComponent } from './components/starship/starship-details/starship-details.component';
import { AddStarShipComponent } from './components/starship/starship-add/starship-add.component';


import { VehiclesListComponent } from './components/vehicle/vehicle-list/vehicles-list.component';
import { VehicleDetailsComponent } from './components/vehicle/vehicle-details/vehicle-details.component';
import { AddVehicleComponent } from './components/vehicle/vehicle-add/vehicle-add.component';
import { PesquisaListComponent } from './components/pesquisa/pesquisa-list.component';

import { LoginComponent } from './components/login/login-component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', component: PeopleListComponent },
  { path: 'people/:id', component: PeopleDetailsComponent },
  
  { path: '', redirectTo: 'films', pathMatch: 'full' },
  { path: 'films', component: FilmsListComponent },
  { path: 'films/:id', component: FilmDetailsComponent },

  { path: '', redirectTo: 'planets', pathMatch: 'full' },
  { path: 'planets', component: PlanetsListComponent },
  { path: 'planets/:id', component: PlanetDetailsComponent },

  { path: '', redirectTo: 'species', pathMatch: 'full' },
  { path: 'species', component: SpeciesListComponent },
  { path: 'species/:id', component: SpecieDetailsComponent },

  { path: '', redirectTo: 'starships', pathMatch: 'full' },
  { path: 'starships', component: StarShipsListComponent },
  { path: 'starships/:id', component: StarShipDetailsComponent },

  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehiclesListComponent },
  { path: 'vehicles/:id', component: VehicleDetailsComponent },

  { path: '', redirectTo: 'peopleplanets', pathMatch: 'full' },
  { path: 'peopleplanets', component: PesquisaListComponent },  
  
  { path: 'addFilm', component: AddFilmComponent },
  { path: 'addPeople', component: AddPeopleComponent },
  { path: 'addPlanet', component: AddPlanetComponent },
  { path: 'addSpecie', component: AddSpecieComponent },
  { path: 'addStarship', component: AddStarShipComponent },
  { path: 'addVehicle', component: AddVehicleComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{
 

 }
