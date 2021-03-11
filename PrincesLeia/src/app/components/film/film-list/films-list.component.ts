import { Component, OnInit } from '@angular/core';
import { Films } from 'src/app/models/film.models';
import { FilmService } from 'src/app/services/film.service';


@Component({
  selector: 'app-Films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css'],

})
export class FilmsListComponent implements OnInit {
  entyties?: Films[];
  entity?: Films;
  currentIndex = -1;
  title = '';

  constructor(private _Service: FilmService) { }

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

  setActiveEntity(entity: Films, index: number): void {
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

  searchTitle(): void {
    this.entity = undefined;
    this.currentIndex = -1;

    this._Service.findByTitle(this.title)
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
