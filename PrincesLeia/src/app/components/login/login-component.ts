import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.models';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login-list',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css'],

})
export class LoginComponent implements OnInit {

  autenticated = false;
  entity?: Usuario; 

  email = '';
  senha = '';

  response = '';

  constructor(private router: Router, private _Service: LoginService) { }

  ngOnInit(): void {
   
  }

  Login(): void {
    this._Service.Login(this.email, this.senha )
      .subscribe(
        response => {  
          console.log("ENTROU");
          console.log(response);
          this.autenticated = true;
          this.router.navigate(['people']); 
          
        },
        error => {
          console.log("FERROU");
          console.log(error);
        });
  }

}
