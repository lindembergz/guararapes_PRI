import { Component, OnInit } from '@angular/core';
import { Films } from 'src/app/models/film.models';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.css']
})
export class AddFilmComponent implements OnInit {
  entity: Films = {
      id: 0,
      title: '',
      episodeId: 0 ,
      openingCrawl: '',
      director: '',
      producer: '',
      releaseDate: '',    
      films: [],
      starships:[],
      vehicles:[],
      people:[],
      planets :[],
      url: '',
      created: '',
      edited: '',

  };


  submitted = false;

  constructor(private _Service: FilmService) { }

  ngOnInit(): void {
  }

  save(): void {
     this._Service.create(this.entity)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  new(): void {
    this.submitted = false;
    this.entity = {
      title: '',
      episodeId: 0,
      openingCrawl: '',
      director: '',
      producer: '',
      releaseDate: '', 
      url: '',
      created: '',
      edited: '',
      films:[],
      starships:[],
      vehicles:[],
      people:[],
      planets :[],
    };
  }

}
