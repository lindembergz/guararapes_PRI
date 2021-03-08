import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet.models';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {
  entyties?: Planet[];
  entity?: Planet;
  currentIndex = -1;
  name = '';

  constructor(private _Service: PlanetService) { }

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

  setActiveEntity(entity: Planet, index: number): void {
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
