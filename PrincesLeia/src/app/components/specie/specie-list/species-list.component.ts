import { Component, OnInit } from '@angular/core';
import { Specie } from 'src/app/models/specie.models';
import { SpecieService } from 'src/app/services/specie.service';

@Component({
  selector: 'app-Species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {
  entyties?: Specie[];
  entity?: Specie;
  currentIndex = -1;
  name = '';

  constructor(private _Service: SpecieService) { }

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

  setActiveEntity(entity: Specie, index: number): void {
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
