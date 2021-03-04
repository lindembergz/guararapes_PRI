
interface IServicePull
{   
    Pull<T>( _entity: string , 
             _relations: string[] ,
             _atributties: string[] ,
             _service: IEntityService<T>, 
             _pageIndex: number ); 
}