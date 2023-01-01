import type { HomebrewEntity, HomebrewModel } from "$lib/interfaces/HomebrewModel";
import { BaseMapper, type IEntityMapper } from "./EntityMapper";

export class HomebrewsMapper extends BaseMapper<HomebrewModel, HomebrewEntity> {
    objectToModel(object: any): HomebrewModel {
        throw new Error("Method not implemented.");
    }

    modelToEntity(model: HomebrewModel): HomebrewEntity {
        throw new Error("Method not implemented.");
    }

    entityToModel(entity: HomebrewEntity): HomebrewModel {
        throw new Error("Method not implemented.");
    }
}