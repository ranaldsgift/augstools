import { HomebrewCategoriesEnum } from "$lib/enums/Enums";
import { HomebrewFactory } from "$lib/factories/HomebrewFactory";
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

    public getAll(options: { limit: number; match?: Record<string, unknown> | undefined; }): Promise<HeroModel[]> {
        throw new Error("Method not implemented.");
    }

    public findById(id: string | number): Promise<HeroModel> {
        throw new Error("Method not implemented.");
    }

    public async save(formData: FormData): Promise<HeroModel> {
        var heroModel = this.mapper.objectToModel(Object.fromEntries(formData));
        //return HomebrewFactory.new<HeroModel>(heroModel.userId, HomebrewCategoriesEnum.Heroes);

        if (!heroModel.isValid()) {
            throw new Error("Hero data format is invalid.");
        }

        var homebrew = await this.homebrewsRepository.save(formData);

        if (!homebrew.id) {
            throw new Error("Unable to save Homebrew data.")
        }

        console.log('RETURNED HOMEBREW DATA');
        console.log(homebrew);

        if (!heroModel.id || heroModel.id !== homebrew.id) {
            var id = parseInt(homebrew.id.toString());
            if (!isNaN(id)) {
                heroModel.id = id;    
            }
        }

        var hero = this.mapper.modelToEntity(heroModel);

        console.log('SAVING HERO DATA');
        console.log(hero);
        //return HomebrewFactory.new<HeroModel>(homebrew.userId, HomebrewCategoriesEnum.Heroes);

        const { data, error } = await this.supabaseClient.from('heroes').upsert(hero).select().order('id').limit(1).single();

        if (error) {
            console.log(error.message);
            throw new Error(`Unable to update item. ${error.message}`);
        }

        return HomebrewFactory.new<HeroModel>(homebrew.userId, HomebrewCategoriesEnum.Heroes);
        //return this.mapper.entityToModel(data);
    }
    
    public delete(id: string | number): void {
        throw new Error("Method not implemented.");
    }
}