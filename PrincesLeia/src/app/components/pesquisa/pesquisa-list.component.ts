import { Component, OnInit } from '@angular/core';
import { DTOPeople } from 'src/app/services/DTOs/DTOPeople';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-Pesqsuisa-list',
  templateUrl: './pesquisa-list.component.html',
  styleUrls: ['./pesquisa-list.component.css']
})
export class PesquisaListComponent implements OnInit {
  entyties?: DTOPeople[];
  entity?: DTOPeople;
  currentIndex = -1;
  CountPeople = 0;
  
  film = '';
  specie = '';
  planet = '';
  starship = '';
  vehicle = '';

  name = '';
  gender = '';
  population= '';

  constructor(private _Service: PesquisaService) { }

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

  setActiveEntity(entity: DTOPeople, index: number): void {
    this.entity = entity;
    this.currentIndex = index;
  }

  search(): void {
    this.entity = undefined;
    this.currentIndex = -1;

    this._Service.find(
      this.film ,
      this.specie ,
      this.planet ,
      this.starship ,
      this.vehicle ,
      this.gender, 
      this.population)
      .subscribe(
        data => {
          this.entyties = data;
          this.CountPeople = this.entyties.length;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
