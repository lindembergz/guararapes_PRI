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
import { People } from '../people/people.entity';

@Entity('planets')
export class Planet extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    Id: number;
    @Column({type: 'varchar',unique: true,length:200,nullable:false})
    name : string; // -- The name of this planet.
    @Column({type: 'varchar',length:200,nullable:true})
    diameter : string; // -- The diameter of this planet in kilometers.
    @Column({type: 'varchar',length:200,nullable:true})
    rotation_period : string; // -- The number of standard hours it takes for this planet to complete a single rotation on its axis.
    @Column({type: 'varchar',length:200,nullable:true})
    orbital_period : string; // -- The number of standard days it takes for this planet to complete a single orbit of its local star.
    @Column({type: 'varchar',length:200,nullable:true})
    gravity : string; // -- A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
    @Column({type: 'varchar',length:200,nullable:true})
    population : string; // -- The average population of sentient beings inhabiting this planet.
    @Column({type: 'varchar',length:200,nullable:true})
    climate : string; // -- The climate of this planet. Comma separated if diverse.
    @Column({type: 'varchar',length:200,nullable:true})
    terrain : string; // -- The terrain of this planet. Comma separated if diverse.
    @Column({type: 'varchar',length:200,nullable:true})
    surface_water : string; // -- The percentage of the planet surface that is naturally occurring water or bodies of water. 
    
    @ManyToMany(() => People)
    @JoinTable()
    people: People[];//-- An array of People URL Resources that live on this planet.
    
    @ManyToMany(() => Film)
    @JoinTable()
    films: Film[];


    @Column({type: 'varchar',length:200,nullable:true})
    url : string; // -- the hypermedia URL of this resource.
    @Column({type: 'varchar',length:30,nullable:true})
    created : string; // -- the ISO 8601 date format of the time that this resource was created.
    @Column({type: 'varchar',length:30,nullable:true})
    edited : string; // -- the ISO 8601 date format of the time that this resource was edited.
}

