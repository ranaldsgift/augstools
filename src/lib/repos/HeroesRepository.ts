import { HomebrewCategoriesEnum } from "$lib/enums/Enums";
import type { HeroEntity, HeroEntityView, HeroModel } from "$lib/interfaces/HeroModel";
import type { HeroesMapper } from "$lib/mappers/HeroesMapper";
import type { TypedSupabaseClient } from "@supabase/auth-helpers-sveltekit/dist/types";
import { HomebrewsBaseRepository } from "./HomebrewsRepository";

export class HeroesRepository extends HomebrewsBaseRepository<HeroModel, HeroEntity, HeroEntityView> {
    constructor(
        supabaseClient: TypedSupabaseClient,
        mapper: HeroesMapper
    ) {
        super(supabaseClient, mapper, HomebrewCategoriesEnum.Heroes);
        this.mapper = mapper;
    }

    public async getAll(options?: { limit: number; match?: Record<string, unknown> | undefined; }): Promise<HeroModel[]> {
        const { data, error } = await this.supabaseClient.from('heroes_table').select('*');

        if (error) {
            throw new Error("Error getting list of Heroes from database.", { cause: error });
        }

        let items: HeroModel[] = [];

        if (data && data.length > 0) {
            data.map((item) => {
                items.push(this.mapper.entityToModel(item));
            });
        }

        return items;
    }

    public async findById(id: string | number): Promise<HeroModel> {
        const { data, error } = await this.supabaseClient.from('heroes_table').select('*').eq('id', id).eq('is_deleted', false).order('id').limit(1).single();

        if (!data || error) {
            throw new Error("Error getting Hero data from database.", { cause: error });
        }

        return this.mapper.entityToModel(data);
    }

    public async save(model: HeroModel): Promise<HeroModel> {
        if (!model.isValid()) {
            throw new Error("Hero data format is invalid.");
        }

        var homebrew = await this.homebrewsRepository.saveModel(model);

        if (!homebrew.id) {
            throw new Error("Unable to save Homebrew data.")
        }

        if (!model.id || model.id !== homebrew.id) {
            var id = parseInt(homebrew.id.toString());
            if (!isNaN(id)) {
                model.id = id;    
            }
        }

        var hero = this.mapper.modelToEntity(model);

        const { error } = await this.supabaseClient.from('heroes').upsert(hero).select().order('id').limit(1).single();

        if (error) {
            console.log(error.message);
            throw new Error(`Unable to update item. ${error.message}`);
        }

        return this.findById(hero.id);
    }
    
    public delete(id: string | number): void {
        throw new Error("Method not implemented.");
    }
}