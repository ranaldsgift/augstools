import { HeroesMapper } from "$lib/mappers/HeroesMapper";
import { HomebrewsMapper } from "$lib/mappers/HomebrewsMapper";
import { TokensMapper } from "$lib/mappers/TokensMapper";
import { UserMapper } from "$lib/mappers/UserMapper";
import { HeroesRepository } from "$lib/repos/HeroesRepository";
import { HomebrewsRepository } from "$lib/repos/HomebrewsRepository";
import type { IBaseRepository, IRepository } from "$lib/repos/Repository";
import { TokensRepository } from "$lib/repos/TokensRepository";
import { UserRepository } from "$lib/repos/UserRepository";
import type { TypedSupabaseClient } from "@supabase/auth-helpers-sveltekit/dist/types";
import { MapperFactory } from "./MapperFactory";

export class RepositoryFactory {
    private static supabaseClient: TypedSupabaseClient;

    public static setSupabaseClient(supabaseClient: TypedSupabaseClient) {
        if (!this.supabaseClient) {
            this.supabaseClient = supabaseClient;
        }        
    }

    private static repositories: Record<string, IBaseRepository>;

    public static get<TRepository extends IBaseRepository>(type: string): TRepository {
        if (!this.repositories) {
            this.repositories = {}
        }

        if (!this.repositories[type]) {
            switch (type) {
                case TokensRepository.getType():
                    this.repositories[type] = new TokensRepository(this.supabaseClient, MapperFactory.get<TokensMapper>(TokensMapper.getType()))
                    break;
                case UserRepository.getType():
                    this.repositories[type] = new UserRepository(this.supabaseClient, MapperFactory.get<UserMapper>(UserMapper.getType()))
                    break;
                case HomebrewsRepository.getType():
                    this.repositories[type] = new HomebrewsRepository(this.supabaseClient, MapperFactory.get<HomebrewsMapper>(HomebrewsMapper.getType()));
                    break;
                default:
                case HeroesRepository.getType():
                    this.repositories[type] = new HeroesRepository(this.supabaseClient, MapperFactory.get<HeroesMapper>(HeroesMapper.getType()));
                    break;
            }
        }

        return this.repositories[type] as TRepository;
    }
}