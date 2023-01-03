import type { BaseModel } from "$lib/interfaces/BaseModel"
import type { IEntityMapper } from "$lib/mappers/EntityMapper"
import type { TypedSupabaseClient } from "@supabase/auth-helpers-sveltekit/dist/types"

export interface IBaseRepository {
    supabaseClient: TypedSupabaseClient
    mapper: IEntityMapper<BaseModel, any, any>
    getAll(options?: {
        limit: number,
        match?: Record<string, unknown>
    }): Promise<BaseModel[]>
    findById(id: string | number): Promise<BaseModel>
    save(formData: FormData): Promise<BaseModel>
    delete(id: string | number): void
}

export interface IRepository<TModel extends BaseModel, TEntity> extends IBaseRepository {
    mapper: IEntityMapper<TModel, TEntity, any>
    getAll(options?: {
        limit: number,
        match?: Record<string, unknown>
    }): Promise<TModel[]>
    findById(id: string | number): Promise<TModel>
    save(formData: FormData): Promise<TModel>
    delete(id: string | number): void
}

export abstract class Repository<TModel extends BaseModel, TEntity, TEntityView> implements IRepository<TModel, TEntity> {
    supabaseClient: TypedSupabaseClient;
    mapper: IEntityMapper<TModel, TEntity, TEntityView>
    
    
    constructor(supabaseClient: TypedSupabaseClient, mapper: IEntityMapper<TModel, TEntity, TEntityView>) {
        this.supabaseClient = supabaseClient;
        this.mapper = mapper;
    }
    
    public abstract getAll(options?: { limit: number; match?: Record<string, unknown> | undefined }): Promise<TModel[]>;
    public abstract findById(id: string | number): Promise<TModel>;
    public abstract save(formData: FormData): Promise<TModel>;
    public abstract delete(id: string | number): void;
    
    public static getType(): string {
        return (this as any).name;
    }
}