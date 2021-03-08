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

  updatePublished(status: boolean): void {
    const data = {
      id: this.entity.id,
      name: this.entity.name,
   
    };

    this.message = '';

    this._Service.update(this.entity.id, data)
      .subscribe(
        response => {

          console.log(response);
          this.message = response.message ? response.message : 'alterado com sucesso!';
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
