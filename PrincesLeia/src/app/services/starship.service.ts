import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarShip } from '../models/starship.models';
import {BaseURL} from '../constants';



@Injectable({
  providedIn: 'root'
})
export class StarShipService {

  baseUrl = '';

  constructor(private http: HttpClient ) { 
    this.baseUrl = BaseURL+'StarShip';

  }

  getAll(): Observable<StarShip[]> {
    return this.http.get<StarShip[]>(this.baseUrl);
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

  findByName(name: any): Observable<StarShip[]> {
    if (name!="")
    { return this.http.get<StarShip[]>(`${this.baseUrl}/list/${name}`);}
    else
    { return this.http.get<StarShip[]>(`${this.baseUrl}`);}
  }
}
