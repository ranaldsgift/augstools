import type { BaseModel } from "$lib/interfaces/BaseModel"

export interface IBaseMapper {
    objectToModel(object: any): BaseModel
    modelToEntity(model: BaseModel): any
    entityToModel(entity: any): BaseModel
}

export interface IEntityMapper<TModel extends BaseModel, TEntity, TEntityView> extends IBaseMapper {
    objectToModel(object: any): TModel
    modelToEntity(model: TModel): TEntity
    entityToModel(entity: TEntityView): TModel
}

export abstract class BaseMapper<TModel extends BaseModel, TEntity, TEntityView> implements IEntityMapper<TModel, TEntity, TEntityView> {
    public abstract objectToModel(object: any): TModel
    public abstract modelToEntity(model: TModel): TEntity
    public abstract entityToModel(entity: TEntityView): TModel

    public static getType(): string {
        return (this as any).name;
    }
}

export abstract class TableViewBaseMapper<TModel extends BaseModel, TEntity, TEntityView> implements IBaseMapper {
    public abstract objectToModel(object: any): TModel
    public abstract modelToEntity(model: TModel): TEntity
    public abstract entityToModel(entity: TEntityView): TModel

    public static getType(): string {
        return (this as any).name;
    }
}