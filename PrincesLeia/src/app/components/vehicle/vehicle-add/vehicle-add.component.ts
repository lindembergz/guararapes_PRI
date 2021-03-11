import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.models';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class AddVehicleComponent implements OnInit {
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


  submitted = false;

  constructor(private _Service: VehicleService) { }

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
  }

}
