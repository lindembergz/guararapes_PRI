


interface IEntityService<T>
{   
    create(entity: T):Promise<T>; 
    findAll() : Promise<T[]>;    
    findOne(id: number): Promise<T>; 
    findOneIdByUrl(_url: string  ): Promise<number>   
    update(id: number, entity: T):Promise<void>;    
    remove(id: number);
    ExecRelationCommand(tableName: string , idsRelation: string );
}