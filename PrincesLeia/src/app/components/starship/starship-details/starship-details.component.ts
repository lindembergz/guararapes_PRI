import { Component, OnInit } from '@angular/core';
import { StarShipService } from 'src/app/services/starship.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StarShip } from 'src/app/models/starship.models';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarShipDetailsComponent implements OnInit {
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
    
  message = '';

  constructor(
    private _Service: StarShipService,
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
          this.router.navigate(['/starships']);
        },
        error => {
          console.log(error);
        });
  }
}
