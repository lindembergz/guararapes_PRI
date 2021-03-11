import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DTOPeople } from './DTOs/DTOPeople';
import {BaseURL} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  baseUrl = '';   

  constructor(private http: HttpClient ) { 
    this.baseUrl = BaseURL+'People/Pesquisar';

  }

 
  find(
     film: string ='',
     specie: string ='',
     planet: string ='',
     starship: string='' ,
     vehicle: string ='',    
     gender: string='', 
     population: string=''): Observable<DTOPeople[]> {
     
      return this.http.get<DTOPeople[]>(this.baseUrl+'?Condicao=tudo&film='+film+'&specie='+specie+'&planet='+planet+'&starship='+starship+'&vehicle='+vehicle+'&gender='+gender+'&population='+population);

  }
}
