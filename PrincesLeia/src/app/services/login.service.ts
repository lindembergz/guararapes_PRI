import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = '';   

  constructor(private http: HttpClient ) { 
    this.baseUrl = 'https://localhost:5010/api/v1/Usuarios/Login';
  }
 
  Login(_email: string , _senha: string ): Observable<any> {
    return this.http.post(this.baseUrl, {Id: 0, Email:_email, Senha:_senha} );
  }
}
