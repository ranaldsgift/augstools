import type { BaseModel } from "$lib/interfaces/BaseModel"

export interface IBaseMapper {
    objectToModel(object: any): BaseModel
    modelToEntity(model: BaseModel): any
    entityToModel(entity: any): BaseModel
}

export interface IEntityMapper<TModel extends BaseModel, TEntity> extends IBaseMapper {
    objectToModel(object: any): TModel
    modelToEntity(model: TModel): TEntity
    entityToModel(entity: TEntity): TModel
}

export abstract class BaseMapper<TModel extends BaseModel, TEntity> implements IEntityMapper<TModel, TEntity> {
    public abstract objectToModel(object: any): TModel
    public abstract modelToEntity(model: TModel): TEntity
    public abstract entityToModel(entity: TEntity): TModel

    public static getType(): string {
        return (this as any).name;
    }
}