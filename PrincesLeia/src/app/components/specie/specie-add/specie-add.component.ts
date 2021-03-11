import { Component, OnInit } from '@angular/core';
import { Specie } from 'src/app/models/specie.models';
import { SpecieService } from 'src/app/services/specie.service';

@Component({
  selector: 'app-add-specie',
  templateUrl: './specie-add.component.html',
  styleUrls: ['./specie-add.component.css']
})
export class AddSpecieComponent implements OnInit {
  entity: Specie = {
    id: 0,
    name: '',
    classification :'', 
    designation : '', 
    averageHeight : '',
    averageLifespan : '',
    eyeColors : '',
    hairColors : '',
    skinColors : '',
    language: '',
    homeworld : '',
    people:  [],
    films:  [],
    url : '', 
    created :'',
    edited :'',

  };


  submitted = false;

  constructor(private _Service: SpecieService) { }

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
      name: '',
      classification :'', 
      designation : '', 
      averageHeight : '',
      averageLifespan : '',
      eyeColors : '',
      hairColors : '',
      skinColors : '',
      language: '',
      homeworld : '',
      people:  [],
      films:  [],
      url : '', 
      created :'',
      edited :'',
    };
  }

}
