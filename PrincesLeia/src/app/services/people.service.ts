import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from '../models/people.models';
import {BaseURL} from '../constants';
import { CreatePeopleResponse } from '../Viewmodels/CreatePeopleResponse';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  baseUrl = '';

  constructor(private http: HttpClient ) { 
    this.baseUrl = BaseURL+'People';

  }

  getAll(): Observable<CreatePeopleResponse[]> {
    return this.http.get<CreatePeopleResponse[]>(this.baseUrl);
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

  findByName(name: any): Observable<People[]> {
    if (name!="")
    { return this.http.get<People[]>(`${this.baseUrl}/list/${name}`);}
    else
    { return this.http.get<People[]>(`${this.baseUrl}`);}
  }
}
