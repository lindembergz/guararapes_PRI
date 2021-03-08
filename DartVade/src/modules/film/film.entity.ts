import {BaseEntity, 
    Entity, 
    PrimaryGeneratedColumn,
    Column, 
    OneToOne, 
    UpdateDateColumn,
    CreateDateColumn,
    ManyToMany,
    JoinColumn,
    JoinTable,
    Double}  from 'typeorm';
import { People } from '../people/people.entity';
import { Planet } from '../planet/planet.entity';
import { Specie } from '../specie/specie.entity';
import { Starship } from '../starship/starship.entity';
import { Vehicle } from '../vehicle/vehicle.entity';



@Entity('films')
export class Film extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: bigint;
    @Column({type: 'varchar',unique: true,length:200,nullable:false})
    title :string;//The title of this film
    @Column({type: 'int'}) 
    episode_id :bigint;// The episode number of this film.
    @Column({type: 'varchar',length:1000,nullable:true})
    opening_crawl : string;// The opening paragraphs at the beginning of this film.
    @Column({type: 'varchar',length:200,nullable:true})
    director : string;// The name of the director of this film.
    @Column({type: 'varchar',length:200,nullable:true})
    producer : string;// The name(s) of the producer(s) of this film. Comma separated.
    @Column({type: 'varchar',nullable:true})
    release_date: string;// The ISO 8601 date format of film release at original creator country.
    @ManyToMany(() => Specie)
    @JoinTable()
    species: Specie[];// An array of species resource URLs that are in this film.
    @ManyToMany(() => Starship)
    @JoinTable()
    starships: Starship[];// An array of starship resource URLs that are in this film.
    @ManyToMany(() => Vehicle)
    @JoinTable()
    vehicles: Vehicle[];// An array of vehicle resource URLs that are in this film.
    @ManyToMany(() => People)
    @JoinTable()
    people: People[];// An array of people resource URLs that are in this film.
    @ManyToMany(() => Planet)
    @JoinTable()
    planets: Planet[];// An array of planet resource URLs that are in this film.

    @Column({type: 'varchar',length:500,nullable:true})
    url : string;// the hypermedia URL of this resource.
    @Column({type: 'varchar',length:30,nullable:true})
    created :string;// the ISO 8601 date format of the time that this resource was created.
    @Column({type: 'varchar',length:30,nullable:true})
    edited:string;// the ISO 8601 date format of the time that this resource was edited
}

