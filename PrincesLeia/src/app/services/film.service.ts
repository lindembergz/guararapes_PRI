import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Films } from '../models/film.models';
import {BaseURL} from '../constants';
 

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  baseUrl = '';

  

  constructor(private http: HttpClient ) 
  {
    this.baseUrl = BaseURL+'Film';
   }

  getAll(): Observable<Films[]> {
    console.log("service.getAll");
    return this.http.get<Films[]>(this.baseUrl);
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

  findByTitle(title: any): Observable<Films[]> {
    if (title!= "")
    {
      console.log("service.findByTitle");
     return this.http.get<Films[]>(`${this.baseUrl}/list/${title}`);
    }
    else
    {
      return this.http.get<Films[]>(`${this.baseUrl}`); 
    }
  }
}
