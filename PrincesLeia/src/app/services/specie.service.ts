import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specie } from '../models/specie.models';
import {BaseURL} from '../constants';


@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  baseUrl = '';

  constructor(private http: HttpClient ) {
    this.baseUrl = BaseURL+'Specie';

   }

  getAll(): Observable<Specie[]> {
    return this.http.get<Specie[]>(this.baseUrl);
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

  findByName(name: any): Observable<Specie[]> {
    if (name!="")
    { return this.http.get<Specie[]>(`${this.baseUrl}/list/${name}`);}
    else
    { return this.http.get<Specie[]>(`${this.baseUrl}`);}
  }
}
