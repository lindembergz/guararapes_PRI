import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Films } from '../models/film.models';

const baseUrl = 'http://localhost:5000/api/v1/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Films[]> {
    return this.http.get<Films[]>(baseUrl);
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

  findByTitle(title: any): Observable<Films[]> {
    if (title!= "")
    {
     return this.http.get<Films[]>(`${baseUrl}/list/${title}`);
    }
    else
    {
      return this.http.get<Films[]>(`${baseUrl}`); 
    }
  }
}
