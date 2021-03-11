import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from 'src/app/models/people.models';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  entity: People = {
    id: 0,
    name :'',
    birthYear :'', 
    eyeColor :'',
    gender :'',
    hairColor:'', 
    height :'', 
    mass :'', 
    skinColor :'',
    homeworld :'', 
    films:[], 
    species: [],
    starships: [],
    vehicles: [],
    url :'', 
    created:'',
    edited : ''    
};
    
  message = '';

  constructor(
    private _Service: PeopleService,
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
          this.router.navigate(['/people']);
        },
        error => {
          console.log(error);
        });
  }
}
