import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet.models';
import {BaseURL} from '../constants';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  baseUrl = '';

  constructor(private http: HttpClient ) {
    this.baseUrl = BaseURL+'Planet';

   }

  getAll(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.baseUrl);
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

  findByName(name: any): Observable<Planet[]> {
    if (name!="")
    { return this.http.get<Planet[]>(`${this.baseUrl}/list/${name}`);}
    else
    { return this.http.get<Planet[]>(`${this.baseUrl}`);}
  }
}
