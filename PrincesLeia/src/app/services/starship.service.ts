import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarShip } from '../models/starship.models';

const baseUrl = 'http://localhost:5000/api/v1/StarShip';

@Injectable({
  providedIn: 'root'
})
export class StarShipService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<StarShip[]> {
    return this.http.get<StarShip[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<StarShip[]> {
    if (name!="")
    { return this.http.get<StarShip[]>(`${baseUrl}/list/${name}`);}
    else
    { return this.http.get<StarShip[]>(`${baseUrl}`);}
  }
}
