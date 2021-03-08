import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeoplePlanets } from '../viewmodels/peopleplanets.views';

const baseUrl = 'http://localhost:5000/api/v1/People/vwPeoplePlanets';

@Injectable({
  providedIn: 'root'
})
export class PeoplePlanetsService {

  constructor(private http: HttpClient) { }

 
  find(gender: any, population: any): Observable<PeoplePlanets[]> {
    if (gender!="")
    { return this.http.get<PeoplePlanets[]>(`${baseUrl}?gender=${gender}&population=${population}`);}
    else
    { return this.http.get<PeoplePlanets[]>(`${baseUrl}`);}
  }
}
