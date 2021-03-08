import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.models';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './people-add.component.html',
  styleUrls: ['./people-add.component.css']
})
export class AddPeopleComponent implements OnInit {
  entity: People = {
    id: 0,
    name :'',
    birth_year :'', 
    eye_color :'',
    gender :'',
    hair_color:'', 
    height :'', 
    mass :'', 
    skin_color :'',
    homeworld :'', 
    films:[], 
    species: [],
    starships: [],
    vehicles: [],
    url :'', 
    created:'',
    edited : ''    
};


  submitted = false;

  constructor(private _Service: PeopleService) { }

  ngOnInit(): void {
  }

  save(): void {
    const data = {
       name: this.entity.name,
       episode_id: this.entity.birth_year
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
      birth_year :'', 
      eye_color :'',
      gender :'',
      hair_color:'', 
      height :'', 
      mass :'', 
      skin_color :'',
      homeworld :'', 
      films:[], 
      species: [],
      starships: [],
      vehicles: [],
      url :'', 
      created:'',
      edited : '' 
    };
  }

}
