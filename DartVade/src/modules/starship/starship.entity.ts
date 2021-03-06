import {BaseEntity, 
    Entity, 
    PrimaryGeneratedColumn,
    Column, 
    OneToOne, 
    UpdateDateColumn,
    CreateDateColumn,
    ManyToMany,
    JoinTable,
    JoinColumn,
    Double}  from 'typeorm';
import { Film } from '../film/film.entity';
import { People } from '../people/people.entity';

@Entity('starships')
export class Starship extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    Id: number;
    @Column({type: 'varchar',unique: true,length:200,nullable:false})
    name :string; // The name of this starship. The common name, such as "Death Star".
    @Column({type: 'varchar',length:200,nullable:true})
    model:string; // The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".
    @Column({type: 'varchar',length:200,nullable:true})
    starship_class :string; // The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
    @Column({type: 'varchar',length:200,nullable:true})
    manufacturer :string; // The manufacturer of this starship. Comma separated if more than one.
    @Column({type: 'varchar',length:200,nullable:true})
    cost_in_credits :string; // The cost of this starship new, in galactic credits.
    @Column({type: 'varchar',length:200,nullable:true})
    length :string; // The length of this starship in meters.
    @Column({type: 'varchar',length:200,nullable:true})
    crew :string; // The number of personnel needed to run or pilot this starship.
    @Column({type: 'varchar',length:200,nullable:true})
    passengers :string; // The number of non-essential people this starship can transport.
    @Column({type: 'varchar',length:200,nullable:true})
    max_atmosphering_speed :string; //The maximum speed of this starship in the atmosphere. "N/A" if this starship is incapable of atmospheric flight.
    @Column({type: 'varchar',length:200,nullable:true})
    hyperdrive_rating :string; // The class of this starships hyperdrive.
    @Column({type: 'varchar',length:200,nullable:true})
    MGLT :string; // The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
    @Column({type: 'varchar',length:200,nullable:true})
    cargo_capacity :string; // The maximum number of kilograms that this starship can transport.
    @Column({type: 'varchar',length:200,nullable:true})
    consumables :string; //The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
   
    @ManyToMany(() => People)
    @JoinTable()
    people: People[];/// An array of People URL Resources that this starship has been piloted by.
    
    @ManyToMany(() => Film)
    @JoinTable()
    films: Film[];// An array of Film URL Resources that this starship has appeared in

    @Column({type: 'varchar',length:200,nullable:true})
    url: string; //the hypermedia URL of this resource.
    @Column({type: 'varchar',length:30,nullable:true})
    created :string; //  the ISO 8601 date format of the time that this resource was created.
    @Column({type: 'varchar',length:30,nullable:true})
    edited :string; // the ISO 8601 date format of the time that this resource was edited.
}

