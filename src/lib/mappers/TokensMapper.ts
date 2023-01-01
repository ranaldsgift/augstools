import type { TokenEntity, TokenModel } from "$lib/interfaces/TokenModel";
import { BaseMapper } from "./EntityMapper";

export class TokensMapper extends BaseMapper<TokenModel, TokenEntity, TokenEntity> {
    objectToModel(object: any): TokenModel {
        throw new Error("Method not implemented.");
    }

    modelToEntity(model: TokenModel): TokenEntity {
        throw new Error("Method not implemented.");
    }
    
    entityToModel(entity: TokenEntity): TokenModel {
        throw new Error("Method not implemented.");
    }
}