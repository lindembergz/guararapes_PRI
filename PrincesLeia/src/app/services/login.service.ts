import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BaseURL} from '../constants';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = '';   

  constructor(private http: HttpClient ) { 
    this.baseUrl = 'https://localhost:5010/api/v1/Usuarios/Login';
  }
 
  Login(_email: string , _senha: string ): Observable<any> {
      console.log( _email+ _senha );
    return this.http.post(this.baseUrl, {id: 0, email:_email, senha:_senha} );
  }
}
