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
    starshipClass :'',
    manufacturer :'',
    costInCredits :'',
    length :'',
    crew :'',
    passengers :'',
    maxAtmospheringSpeed :'',
    hyperdriveRating :'',
    MGLT :'', 
    cargoCapacity :'',
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
      name :'', 
      model:'', 
      starshipClass :'',
      manufacturer :'',
      costInCredits :'',
      length :'',
      crew :'',
      passengers :'',
      maxAtmospheringSpeed :'',
      hyperdriveRating :'',
      MGLT :'', 
      cargoCapacity :'',
      consumables :'',
      people: [],
      films: [],
      url: '',
      created :'',
      edited :'',
    };
  }

}
