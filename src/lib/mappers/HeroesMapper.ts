import { HomebrewCategoriesEnum } from "$lib/enums/Enums";
import { HeroModel, type HeroEntity } from "$lib/interfaces/HeroModel";
import { BaseMapper, type IEntityMapper } from "./EntityMapper";

export class HeroesMapper extends BaseMapper<HeroModel, HeroEntity> {
    objectToModel(object: any): HeroModel {
        var hero = new HeroModel(object.user_id);

        hero.theme = object.theme;
        hero.tokenId = object.token_id;
        hero.sheetBackgroundColor = object.sheet_background_color;
        hero.diceIconColor = object.dice_icon_color;
        hero.diceBackgroundColor = object.dice_background_color;
        hero.traitKeywords = object.trait_keywords;
        hero.abilityNames = object.ability_names ? object.ability_names.split(';') : undefined;
        hero.abilityEffects = object.ability_effects ? object.ability_effects.split(';') : undefined;
        hero.heroImage = object.hero_image;
        hero.iconImage = object.icon_image;
        hero.moveAttribute = object.move_attribute;
        hero.attackAttribute = object.attack_attribute;
        hero.defendAttribute = object.defend_attribute;
        hero.skillAttribute = object.skill_attribute;
        hero.focusAttribute = object.focus_attribute;
        hero.lifeAttribute = object.life_attribute;
        hero.awakeningAttribute = object.awakening_attribute;
        hero.actionDice = object.action_dice ? object.action_dice.split(';') : undefined;
        hero.imagePositionLeft = object.hero_image_position_left;
        hero.imagePositionTop = object.hero_image_position_top;
        hero.heroImageScale = object.hero_image_scale;
        hero.isSupportFigure = false;
        hero.augsLicense = object.augs_license;
        hero.dateCreated = object.date_created;
        hero.dateModified = object.date_modified;
        hero.homebrewCategory = HomebrewCategoriesEnum.Heroes;
        hero.isDeleted = object.is_deleted;
        hero.userId = object.user_id;
        hero.description = object.description;
        hero.id = object.id;
        hero.name = object.name;
        hero.originalImage = object.original_image;
        
        return hero;
    }

    modelToEntity(model: HeroModel): HeroEntity {
        throw new Error("Method not implemented.");
    }
    
    entityToModel(entity: HeroEntity): HeroModel {
        throw new Error("Method not implemented.");
    }
}