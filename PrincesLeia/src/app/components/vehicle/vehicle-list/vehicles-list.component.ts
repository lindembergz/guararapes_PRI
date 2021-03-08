import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.models';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-Vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {
  entyties?: Vehicle[];
  entity?: Vehicle;
  currentIndex = -1;
  name = '';

  constructor(private _Service: VehicleService) { }

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

  setActiveEntity(entity: Vehicle, index: number): void {
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
