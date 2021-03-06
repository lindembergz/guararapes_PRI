import {BaseEntity, 
    Entity, 
    PrimaryGeneratedColumn,
    Column, 
    OneToMany,
    OneToOne, 
    UpdateDateColumn,
    CreateDateColumn,
    ManyToMany,
    JoinTable,
    JoinColumn,
    Double}  from 'typeorm';
import { Film } from '../film/film.entity';
import { People } from '../people/people.entity';

@Entity('species')
export class Specie extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    Id: number;
    @Column({type: 'varchar',unique: true,length:200,nullable:false})
    name : string; // -- The name of this species.
    @Column({type: 'varchar', length:200,nullable:true})
    classification : string; // -- The classification of this species, such as "mammal" or "reptile".
    @Column({type: 'varchar', length:200,nullable:true})
    designation : string; // -- The designation of this species, such as "sentient".
    @Column({type: 'varchar', length:200,nullable:true})
    average_height : string; // -- The average height of this species in centimeters.
    @Column({type: 'varchar', length:200,nullable:true})
    average_lifespan : string; // -- The average lifespan of this species in years.
    @Column({type: 'varchar', length:200,nullable:true})
    eye_colors : string; // -- A comma-separated : string; // of common eye colors for this species, "none" if this species does not typically have eyes.
    @Column({type: 'varchar', length:200,nullable:true})
    hair_colors : string; // -- A comma-separated : string; // of common hair colors for this species, "none" if this species does not typically have hair.
    @Column({type: 'varchar', length:200,nullable:true})
    skin_colors : string; // -- A comma-separated : string; // of common skin colors for this species, "none" if this species does not typically have skin.
    @Column({type: 'varchar', length:200,nullable:true})
    language : string; // -- The language commonly spoken by this species.
    @Column({type: 'varchar', length:200,nullable:true})
    homeworld : string; // -- The URL of a planet resource, a planet that this species originates from.
    

    @ManyToMany(() => People)
    @JoinTable()
    people: People[];//- An array of People URL Resources that are a part of this species.

    @ManyToMany(() => Film)
    @JoinTable()
    films: Film[];//-- An array of Film URL Resources that this species has appeared in.



    @Column({type: 'varchar', length:200,nullable:true})
    url : string; // -- the hypermedia URL of this resource.
    @Column({type: 'varchar', length:30,nullable:true})
    created : string; // -- the ISO 8601 date format of the time that this resource was created.
    @Column({type: 'varchar', length:30,nullable:true})
    edited : string; // -- the ISO 8601 date format of the time that this resource was edited.
}

