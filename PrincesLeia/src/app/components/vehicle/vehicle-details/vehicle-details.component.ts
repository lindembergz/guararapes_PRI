import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle.models';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  entity: Vehicle = {
    id: 0,
    name : '',
    model : '',
    vehicleClass : '',
    manufacturer : '',
    length : '',
    costInCredits : '',
    crew : '',
    passengers : '',
    maxAtmospheringSpeed : '',
    cargoCapacity : '', 
    consumables : '',
    people: [],
    films: [],
    url : '',
    created : '',
    edited :'',
    };
    
  message = '';

  constructor(
    private _Service: VehicleService,
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
          this.router.navigate(['/vehicles']);
        },
        error => {
          console.log(error);
        });
  }
}
