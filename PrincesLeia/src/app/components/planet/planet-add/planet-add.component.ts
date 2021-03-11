import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet.models';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-add-planet',
  templateUrl: './planet-add.component.html',
  styleUrls: ['./planet-add.component.css']
})
export class AddPlanetComponent implements OnInit {
  entity: Planet = {
    id: 0,
    name : '',
    diameter: '',   
    rotationPeriod: '',
    orbitalPeriod : '',
    gravity : '',
    population: '',
    climate: '',
    terrain : '',
    surfaceWater : '',
    people:  [],
    films:  [],
    url : '',
    created : '',
    edited : '',

  };


  submitted = false;

  constructor(private _Service: PlanetService) { }

  ngOnInit(): void {
  }

  save(): void {
    this._Service.create(this.entity)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  new(): void {
    this.submitted = false;
    this.entity = {
      name : '',
      diameter: '',   
      rotationPeriod: '',
      orbitalPeriod : '',
      gravity : '',
      population: '',
      climate: '',
      terrain : '',
      surfaceWater : '',
      people:  [],
      films:  [],
      url : '',
      created : '',
      edited : '',
    };
  }

}
