import { Injectable } from '@nestjs/common';
import { getManager, getConnection  } from 'typeorm';

@Injectable()
export class ServicePull implements IServicePull
{    
    filmsURL : string  = "https://swapi.dev/api/films/";
    peopleURL: string  = "https://swapi.dev/api/people/";
    planetsURL : string=  "https://swapi.dev/api/planets/";
    speciesURL : string=  "https://swapi.dev/api/species/";
    starshipsURL: string=  "https://swapi.dev/api/starships/";
    vehiclesURL : string=  "https://swapi.dev/api/vehicles/";

   jsontoArray(json)
  {
      var result = [];
      var keys = Object.keys(json);
      keys.forEach((key)=>{ result.push(json[key]);});
      return result;
  }

  Pull<T>( _entity: string , 
          _relations: string[] ,
          _atributties: string[] ,
          _service: IEntityService<T>, 
          _pageIndex: number ) 
  {  
      const swapi = require('swapi-node');
      const _indexResults = 3;
      let _page: string;   
      swapi.get(`https://swapi.dev/api/${_entity}?page=${_pageIndex}`).
      then( (result) => 
      {   this.jsontoArray(result)[ _indexResults ].map
          ((head) =>
          {   const urlHead = head["url"];       
              if (_relations.length == 0) { _service.create(head); }
              else
              {  _service.findOneIdByUrl( urlHead ).then( ( idHead ) => 
                  {   _relations.map( 
                      (detail)=>{   head[ _atributties[_relations.indexOf(detail)] ].map( 
                                    (urlDetail) =>
                                    {    const entityManager = getManager();
                                        entityManager.query(`select Id from ${detail} where url = '${urlDetail}'`).
                                        then( (idDetail)=>
                                         { _service.ExecRelationCommand(`${_entity}_${detail}_${detail}`,
                                          `{"${_entity}Id":${idHead.toString()} ,"${detail}Id":${idDetail[0].Id.toString()}}` );}  
                                            );                                                                       
                                    });                                                                                
                                });              
                  });                 
              }   
          });
          if (this.jsontoArray(result)[1] != null)
          {  this.Pull<T>( _entity , _relations , _atributties , _service, _pageIndex + 1 ); }
      }).catch( (err) => { console.log(err); });   
  }

}