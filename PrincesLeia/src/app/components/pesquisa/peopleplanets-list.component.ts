import { Component, OnInit } from '@angular/core';
import { PeoplePlanets } from 'src/app/viewmodels/peopleplanets.views';
import { PeoplePlanetsService } from 'src/app/services/peopleplanets.service';

@Component({
  selector: 'app-PeoplePlanets-list',
  templateUrl: './peopleplanets-list.component.html',
  styleUrls: ['./peopleplanets-list.component.css']
})
export class PeoplePlanetsListComponent implements OnInit {
  entyties?: PeoplePlanets[];
  entity?: PeoplePlanets;
  currentIndex = -1;
  name = '';
  gender = '';
  population= '0';

  constructor(private _Service: PeoplePlanetsService) { }

  ngOnInit(): void {
    this.retrieveEntities();
  }

  retrieveEntities(): void {
    /*this._Service.getAll()
      .subscribe(
        data => {
          this.entyties = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });*/
  }

  refreshList(): void {
    this.retrieveEntities();
    this.entity = undefined;
    this.currentIndex = -1;
  }

  setActiveEntity(entity: PeoplePlanets, index: number): void {
    this.entity = entity;
    this.currentIndex = index;
  }

  search(): void {
    this.entity = undefined;
    this.currentIndex = -1;

    this._Service.find(this.gender, this.population)
      .subscribe(
        data => {
          this.entyties = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
