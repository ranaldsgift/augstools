import type { IBaseMapper } from "$lib/mappers/EntityMapper";
import { HeroesMapper } from "$lib/mappers/HeroesMapper";
import { HomebrewsMapper } from "$lib/mappers/HomebrewsMapper";
import { TokensMapper } from "$lib/mappers/TokensMapper";
import { UserMapper } from "$lib/mappers/UserMapper";

export class MapperFactory {
    private static mappers: Record<string, IBaseMapper>;

    public static get<TMapper extends IBaseMapper>(type: string): TMapper {
        if (!this.mappers) {
            this.mappers = {};
        }

        if (!this.mappers[type]) {
            switch (type) {
                case TokensMapper.getType(): {
                    this.mappers[type] = new TokensMapper();
                    break;
                }
                case UserMapper.getType(): {
                    this.mappers[type] = new UserMapper();
                    break;
                }
                case HomebrewsMapper.getType(): {
                    this.mappers[type] = new HomebrewsMapper();
                    break;
                }
                default:
                case HeroesMapper.getType(): {
                    this.mappers[type] = new HeroesMapper();
                    break;
                }
            }
        }

        return this.mappers[type] as TMapper;
    }
}