import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddPeopleComponent } from './components/people/people-add/people-add.component';
import { PeopleDetailsComponent } from './components/people/people-details/people-details.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';

import { AddFilmComponent } from './components/film/film-add/film-add.component';
import { FilmDetailsComponent } from './components/film/film-details/film-details.component';
import { FilmsListComponent } from './components/film/film-list/films-list.component';



import { AddSpecieComponent } from './components/specie/specie-add/specie-add.component';
import { SpecieDetailsComponent } from './components/specie/specie-details/specie-details.component';
import { SpeciesListComponent } from './components/specie/specie-list/species-list.component';


import { AddPlanetComponent } from './components/planet/planet-add/planet-add.component';
import { PlanetDetailsComponent } from './components/planet/planet-details/planet-details.component';
import { PlanetsListComponent } from './components/planet/planet-list/planets-list.component';

import { AddStarShipComponent } from './components/starship/starship-add/starship-add.component';
import { StarShipDetailsComponent } from './components/starship/starship-details/starship-details.component';
import { StarShipsListComponent } from './components/starship/starship-list/starships-list.component';

import { AddVehicleComponent } from './components/vehicle/vehicle-add/vehicle-add.component';
import { VehicleDetailsComponent } from './components/vehicle/vehicle-details/vehicle-details.component';
import { VehiclesListComponent } from './components/vehicle/vehicle-list/vehicles-list.component';


import { PesquisaListComponent } from './components/pesquisa/pesquisa-list.component';

import { LoginComponent } from './components/login/login-component';




@NgModule({
  declarations: [
    AppComponent,
    AddPeopleComponent ,
    PeopleDetailsComponent ,
    PeopleListComponent,
    AddFilmComponent,
    FilmDetailsComponent,
    FilmsListComponent,

    AddSpecieComponent ,
    SpecieDetailsComponent ,
    SpeciesListComponent ,
    AddPlanetComponent,
    PlanetDetailsComponent,
    PlanetsListComponent ,
    AddStarShipComponent ,
    StarShipDetailsComponent ,
    StarShipsListComponent ,
    AddVehicleComponent,
    VehicleDetailsComponent,
    VehiclesListComponent,
    PesquisaListComponent, 
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }