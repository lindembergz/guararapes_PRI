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
    vehicle_class : '',
    manufacturer : '',
    length : '',
    cost_in_credits : '',
    crew : '',
    passengers : '',
    max_atmosphering_speed : '',
    cargo_capacity : '', 
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
      model : '',
      vehicle_class : '',
      manufacturer : '',
      length : '',
      cost_in_credits : '',
      crew : '',
      passengers : '',
      max_atmosphering_speed : '',
      cargo_capacity : '', 
      consumables : '',
      people: [],
      films: [],
      url : '',
      created : '',
      edited :'',
    };
  }

}
