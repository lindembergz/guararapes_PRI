import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Planet } from 'src/app/models/planet.models';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
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
    
  message = '';

  constructor(
    private _Service: PlanetService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.get(this.route.snapshot.params.id);
  }

  get(id: string): void {
    this._Service.get(id)
      .subscribe(
        data => {
          this.entity = data;
          console.log(this.entity.id);
        },
        error => {
          console.log(error);
        });
  }
  
  update(): void {
    this.message = '';

    this._Service.update(this.entity.id, this.entity)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'alterado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  delete(): void {
    this._Service.delete(this.entity.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/planets']);
        },
        error => {
          console.log(error);
        });
  }
}
