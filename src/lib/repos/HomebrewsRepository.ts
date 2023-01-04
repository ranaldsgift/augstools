import type { HomebrewCategoriesEnum } from "$lib/enums/Enums";
import { RepositoryFactory } from "$lib/factories/RepositoryFactory";
import type { BaseModel } from "$lib/interfaces/BaseModel";
import type { HomebrewModel, HomebrewEntity } from "$lib/interfaces/HomebrewModel";
import type { IEntityMapper } from "$lib/mappers/EntityMapper";
import type { TypedSupabaseClient } from "@supabase/auth-helpers-sveltekit/dist/types";
import {  Repository } from "./Repository";

export class HomebrewsRepository extends Repository<HomebrewModel, HomebrewEntity, HomebrewEntity> {
    public getAll(options: { limit: number; match?: Record<string, unknown> | undefined; }): Promise<HomebrewModel[]> {
        throw new Error("Method not implemented.");
    }

    public findById(id: string | number): Promise<HomebrewModel> {
        throw new Error("Method not implemented.");
    }

    public async save(formData: FormData): Promise<HomebrewModel> {
        var entity = this.mapper.modelToEntity(this.mapper.objectToModel(Object.fromEntries(formData)));

        entity.date_modified = new Date().toISOString();

        console.log(entity);

        const { data, error } = await this.supabaseClient.from('homebrews').upsert(entity).select().order('id').limit(1).single();

        if (error) {
            console.log(error);
            throw new Error(`Unable to update item. ${error.message}`);
        }

        return this.mapper.entityToModel(data);
    }
    
    public delete(id: string | number): void {
        throw new Error("Method not implemented.");
    }

}

export abstract class HomebrewsBaseRepository<TModel extends BaseModel, TEntity, TEntityView> extends Repository<TModel, TEntity, TEntityView> {
    homebrewsRepository: HomebrewsRepository;
    category: HomebrewCategoriesEnum

    constructor(
        supabaseClient: TypedSupabaseClient,
        mapper: IEntityMapper<TModel, TEntity, TEntityView>,
        category: HomebrewCategoriesEnum
        ) {
        super(supabaseClient, mapper);
        this.homebrewsRepository = RepositoryFactory.get<HomebrewsRepository>(HomebrewsRepository.getType()); //new HomebrewsRepository(supabaseClient, MapperFactory.get<HomebrewsMapper>(HomebrewModel.getType()));
        this.category = category;
    }
}