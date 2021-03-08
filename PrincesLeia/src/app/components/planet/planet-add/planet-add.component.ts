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
    rotation_period: '',
    orbital_period : '',
    gravity : '',
    population: '',
    climate: '',
    terrain : '',
    surface_water : '',
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
    const data = {
       name: this.entity.name,
    };

    this._Service.create(data)
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
      rotation_period: '',
      orbital_period : '',
      gravity : '',
      population: '',
      climate: '',
      terrain : '',
      surface_water : '',
      people:  [],
      films:  [],
      url : '',
      created : '',
      edited : '',
    };
  }

}
