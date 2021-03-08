import { Component, OnInit } from '@angular/core';
import { StarShip } from 'src/app/models/starship.models';
import { StarShipService } from 'src/app/services/starship.service';

@Component({
  selector: 'app-add-starship',
  templateUrl: './starship-add.component.html',
  styleUrls: ['./starship-add.component.css']
})
export class AddStarShipComponent implements OnInit {
  entity: StarShip = {
    id: 0,
    name :'', 
    model:'', 
    starship_class :'',
    manufacturer :'',
    cost_in_credits :'',
    length :'',
    crew :'',
    passengers :'',
    max_atmosphering_speed :'',
    hyperdrive_rating :'',
    MGLT :'', 
    cargo_capacity :'',
    consumables :'',
    people: [],
    films: [],
    url: '',
    created :'',
    edited :'',
  };


  submitted = false;

  constructor(private _Service: StarShipService) { }

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
      name :'', 
      model:'', 
      starship_class :'',
      manufacturer :'',
      cost_in_credits :'',
      length :'',
      crew :'',
      passengers :'',
      max_atmosphering_speed :'',
      hyperdrive_rating :'',
      MGLT :'', 
      cargo_capacity :'',
      consumables :'',
      people: [],
      films: [],
      url: '',
      created :'',
      edited :'',
    };
  }

}
