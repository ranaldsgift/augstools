import { HomebrewCategoriesEnum } from "$lib/enums/Enums";
import type { TokenEntity, TokenModel } from "$lib/interfaces/TokenModel";
import type { TokensMapper } from "$lib/mappers/TokensMapper";
import type { TypedSupabaseClient } from "@supabase/auth-helpers-sveltekit/dist/types";
import { HomebrewsBaseRepository } from "./HomebrewsRepository";

export class TokensRepository extends HomebrewsBaseRepository<TokenModel, TokenEntity, TokenEntity> {
    constructor(
        supabaseClient: TypedSupabaseClient,
        mapper: TokensMapper
    ) {
        super(supabaseClient, mapper, HomebrewCategoriesEnum.Tokens);
        this.mapper = mapper;
    }

    public getAll(options: { limit: number; match?: Record<string, unknown> | undefined; }): Promise<TokenModel[]> {
        throw new Error("Method not implemented.");
    }

    public findById(id: string | number): Promise<TokenModel> {
        throw new Error("Method not implemented.");
    }

    public save(model: TokenModel): Promise<TokenModel> {
        throw new Error("Method not implemented.");
    }
    
    public delete(id: string | number): void {
        throw new Error("Method not implemented.");
    }
    
}