import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Films } from 'src/app/models/film.models';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  entity: Films = {
    id: 0,
    title: '',
    episode_id: 0 ,
    opening_crawl: '',
    director: '',
    producer: '',
    release_date: '',    
    species: [],
    starships:[],
    vehicles:[],
    people:[],
    planets :[],
    url: '',
    created: '',
    edited: '',
    };
    
  message = '';

  constructor(
    private _Service: FilmService,
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

  updatePublished(status: boolean): void {
    const data = {
      id: this.entity.id,
      title: this.entity.title,
      episode_id: this.entity.episode_id,
    };

    this.message = '';

    this._Service.update(this.entity.id, data)
      .subscribe(
        response => {

          console.log(response);
          this.message = response.message ? response.message : 'alterado com sucesso!';
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
          this.router.navigate(['/films']);
        },
        error => {
          console.log(error);
        });
  }
}
