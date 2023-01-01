import { AugsLicensesEnum, HomebrewCategoriesEnum } from "$lib/enums/Enums";
import type { HomebrewEntity, HomebrewModel } from "$lib/interfaces/HomebrewModel";
import { BaseMapper } from "./EntityMapper";

export class HomebrewsMapper extends BaseMapper<HomebrewModel, HomebrewEntity, HomebrewEntity> {
    objectToModel(object: any): HomebrewModel {
        var id = 0;
        if (object.id) {
            id = parseInt(object.id); 
        }

        return {
            id: id == 0 ? undefined : id,
            userId: object.userId,
            augsLicense: object.augsLicense,
            homebrewCategory: object.homebrewCategory,
            name: object.name ?? '',
            description: object.description ?? '',
            originalImage: object.originalImage ?? '',
            dateCreated: object.dateCreated ? new Date(object.dateCreated) : new Date(),
            dateModified: object.dateModified ? new Date(object.dateModified) : new Date(),
            isDeleted: object.isDeleted ?? false
        }
    }

    modelToEntity(model: HomebrewModel): HomebrewEntity {
        var id = 0;
        if (model.id) {
            id = parseInt(model.id.toString()) ?? 0; 
        }

        var entity: any = {
            user_id: model.userId,
            augs_license: model.augsLicense,
            homebrew_category: model.homebrewCategory,
            name: model.name ?? '',
            description: model.description ?? '',
            original_image: model.originalImage ?? '',
            date_created: model.dateCreated ? model.dateCreated.toISOString() : new Date().toISOString(),
            date_modified: model.dateModified ? model.dateModified.toISOString() : new Date().toISOString(),
            is_deleted: model.isDeleted ?? false
        }

        if (id != 0) {
            entity.id = id;
        }

        return entity as HomebrewEntity;
    }

    entityToModel(entity: HomebrewEntity): HomebrewModel {
        return {
            id: entity.id,
            userId: entity.user_id,
            augsLicense: AugsLicensesEnum[entity.augs_license],
            homebrewCategory: HomebrewCategoriesEnum[entity.homebrew_category],
            name: entity.name ?? '',
            description: entity.description ?? '',
            originalImage: entity.original_image ?? '',
            dateCreated: entity.date_created ? new Date(entity.date_created) : new Date(),
            dateModified: entity.date_modified ? new Date(entity.date_modified) : new Date(),
            isDeleted: entity.is_deleted ?? false
        }
    }
}