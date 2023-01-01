import type { UserEntity, UserModel } from "$lib/interfaces/UserModel";
import { BaseMapper, type IEntityMapper } from "./EntityMapper";

export class UserMapper extends BaseMapper<UserModel, UserEntity, UserEntity> {
    public objectToModel(object: any): UserModel {
        return {
            id: object.id,
            roleId: parseInt(object.roleId) ?? 3,
            userName: object.userName ?? '',
            avatar: object.avatar ?? '',
            boardgamegeek: object.boardgamegeek ?? '',
            dateCreated: object.dateCreated ? new Date(object.dateCreated) : new Date(),
            dateModified: object.dateModified ? new Date(object.dateModified) : new Date(),
            discord: object.discord ?? '',
            isDeleted: object.isDeleted
        }
    }
    public modelToEntity(model: UserModel): UserEntity {
        return {
            id: model.id,
            role_id: model.roleId,
            user_name: model.userName ?? '',
            avatar: model.avatar ?? '',
            boardgamegeek: model.boardgamegeek ?? '',
            date_created: model.dateCreated.toISOString(),
            date_modified: model.dateModified.toISOString(),
            discord: model.discord ?? '',
            is_deleted: model.isDeleted
        }
    }
    public entityToModel(entity: UserEntity): UserModel {
        return {
            id: entity.id,
            roleId: entity.role_id,
            userName: entity.user_name ?? '',
            avatar: entity.avatar ?? '',
            boardgamegeek: entity.boardgamegeek ?? '',
            dateCreated: new Date(entity.date_created),
            dateModified: new Date(entity.date_modified),
            discord: entity.discord ?? '',
            isDeleted: entity.is_deleted
        }
    }
}