import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle.models';
import {BaseURL} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  baseUrl = '';

  constructor(private http: HttpClient ) {
    this.baseUrl = BaseURL+'Vehicle';

   }

  getAll(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByName(name: any): Observable<Vehicle[]> {
    if (name!="")
    { return this.http.get<Vehicle[]>(`${this.baseUrl}/list/${name}`);}
    else
    { return this.http.get<Vehicle[]>(`${this.baseUrl}`);}
  }
}
