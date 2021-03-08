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

@Entity('vehicles')
export class Vehicle extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: bigint;
    @Column({type: 'varchar',unique: true,length:200,nullable:false})
    name : string; // -- The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
    @Column({type: 'varchar',length:200,nullable:false})
    model : string; // -- The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
    @Column({type: 'varchar',length:200,nullable:false})
    vehicle_class : string; // -- The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
    @Column({type: 'varchar',length:200,nullable:false})
    manufacturer : string; // -- The manufacturer of this vehicle. Comma separated if more than one.
    @Column({type: 'varchar',length:200,nullable:false})
    length : string; // -- The length of this vehicle in meters.
    @Column({type: 'varchar',length:200,nullable:false})
    cost_in_credits : string; // -- The cost of this vehicle new, in Galactic Credits.
    @Column({type: 'varchar',length:200,nullable:false})
    crew : string; // -- The number of personnel needed to run or pilot this vehicle.
    @Column({type: 'varchar',length:200,nullable:false})
    passengers : string; // -- The number of non-essential people this vehicle can transport.
    @Column({type: 'varchar',length:200,nullable:false})
    max_atmosphering_speed : string; // -- The maximum speed of this vehicle in the atmosphere.
    @Column({type: 'varchar',length:200,nullable:false})
    cargo_capacity : string; // -- The maximum number of kilograms that this vehicle can transport.
    @Column({type: 'varchar',length:200,nullable:false})
    consumables : string; // The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
    
    @ManyToMany(() => People)
    @JoinTable()
    people: People[];//-- An array of People URL Resources that this vehicle has been piloted by.
    
    @ManyToMany(() => Film)
    @JoinTable()
    films: Film[];// -- An array of Film URL Resources that this vehicle has appeared in.

    @Column({type: 'varchar',length:200,nullable:false})
    url : string; // -- the hypermedia URL of this resource.
    @Column({type: 'varchar',length:30,nullable:false})
    created : string; // -- the ISO 8601 date format of the time that this resource was created.
    @Column({type: 'varchar',length:30,nullable:false})
    edited : string; // -- the ISO 8601 date format of the time that this resource was edited.
}

