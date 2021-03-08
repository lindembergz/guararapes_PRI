import { Component, OnInit } from '@angular/core';
import { StarShip } from 'src/app/models/starship.models';
import { StarShipService } from 'src/app/services/starship.service';

@Component({
  selector: 'app-Starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarShipsListComponent implements OnInit {
  entyties?: StarShip[];
  entity?: StarShip;
  currentIndex = -1;
  name = '';

  constructor(private _Service: StarShipService) { }

  ngOnInit(): void {
    this.retrieveEntities();
  }

  retrieveEntities(): void {
    this._Service.getAll()
      .subscribe(
        data => {
          this.entyties = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEntities();
    this.entity = undefined;
    this.currentIndex = -1;
  }

  setActiveEntity(entity: StarShip, index: number): void {
    this.entity = entity;
    this.currentIndex = index;
  }

  removeAll(): void {
    this._Service.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.entity = undefined;
    this.currentIndex = -1;

    this._Service.findByName(this.name)
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
