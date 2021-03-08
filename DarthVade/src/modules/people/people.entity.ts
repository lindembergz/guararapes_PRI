import {BaseEntity, 
    Entity, 
    PrimaryGeneratedColumn,
    Column, 
    OneToMany,
    OneToOne, 
    UpdateDateColumn,
    CreateDateColumn,
    ManyToMany,
    JoinColumn,
    JoinTable,
    Double}  from 'typeorm';
import { Film } from '../film/film.entity';
import { Specie } from '../specie/specie.entity';
import { Starship } from '../starship/starship.entity';
import { Vehicle } from '../vehicle/vehicle.entity';

@Entity('people')
export class People extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: bigint;
    @Column({type: 'varchar',unique: true,length:200,nullable:false})
    name :string; //-- The name of this person.
    @Column({type: 'varchar',length:20,nullable:true})
    birth_year :string; //-- The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
    @Column({type: 'varchar',length:200,nullable:true})
    eye_color :string;//-- The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.
    @Column({type: 'varchar',length:200,nullable:true})
    gender :string; //-- The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
    @Column({type: 'varchar',length:200,nullable:true})
    hair_color :string; //-- The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
    @Column({type: 'varchar',length:200,nullable:true})
    height :string; //-- The height of the person in centimeters.
    @Column({type: 'varchar',length:200,nullable:true})
    mass :string; //-- The mass of the person in kilograms.
    @Column({type: 'varchar',length:200,nullable:true})
    skin_color :string; //-- The skin color of this person.
    @Column({type: 'varchar',length:200,nullable:true})
    homeworld :string; //-- The URL of a planet resource, a planet that this person was born on or inhabits.
    
    @ManyToMany(() => Film)
    @JoinTable()
    films: Film[];//-- An array of film resource URLs that this person has been in.    

    @ManyToMany(() => Specie)
    @JoinTable()
    species: Specie[];//  An array of species resource URLs that this person belongs to.

    @ManyToMany(() => Starship)
    @JoinTable()
    starships: Starship[];//-- An array of starship resource URLs that this person has piloted.

    @ManyToMany(() => Vehicle)
    @JoinTable()
    vehicles: Vehicle[];// An array of vehicle resource URLs that are in this film.

    @Column({type: 'varchar',length:200,nullable:true})
    url :string; //-- the hypermedia URL of this resource.
    @Column({type: 'varchar',length:30,nullable:true})
    created :string; //-- the ISO 8601 date format of the time that this resource was created.
    @Column({type: 'varchar',length:30,nullable:true})
    edited : string; //-- the ISO 8601 date format of the time that this resource was edited.
}
