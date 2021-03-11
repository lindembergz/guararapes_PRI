import { Component, OnInit } from '@angular/core';
import { SpecieService } from 'src/app/services/specie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Specie } from 'src/app/models/specie.models';

@Component({
  selector: 'app-specie-details',
  templateUrl: './specie-details.component.html',
  styleUrls: ['./specie-details.component.css']
})
export class SpecieDetailsComponent implements OnInit {
  entity: Specie = {
    id: 0,
    name: '',
    classification :'', 
    designation : '', 
    averageHeight : '',
    averageLifespan : '',
    eyeColors : '',
    hairColors : '',
    skinColors : '',
    language: '',
    homeworld : '',
    people:  [],
    films:  [],
    url : '', 
    created :'',
    edited :'',
    };
    
  message = '';

  constructor(
    private _Service: SpecieService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.get(this.route.snapshot.params.id);
  }

  get(id: string): void {
    this._Service.get(id)
      .subscribe(
        data => {
          this.entity = data;
          console.log(this.entity.id);
        },
        error => {
          console.log(error);
        });
  }

  update(): void {
    this.message = '';

    this._Service.update(this.entity.id, this.entity)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'alterado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  delete(): void {
    this._Service.delete(this.entity.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/species']);
        },
        error => {
          console.log(error);
        });
  }
}
