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


  submitted = false;

  constructor(private _Service: FilmService) { }

  ngOnInit(): void {
  }

  save(): void {
    const data = {
       title: this.entity.title,
      episode_id: this.entity.episode_id
    };

    this._Service.create(data)
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
      episode_id: 0,
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
  }

}
