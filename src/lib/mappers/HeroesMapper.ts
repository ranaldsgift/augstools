import { AugsLicensesEnum, DiceIconsEnum, HomebrewCategoriesEnum } from "$lib/enums/Enums";
import { HeroModel, type HeroEntity, type HeroEntityView } from "$lib/interfaces/HeroModel";
import { ThemeTemplatesEnum } from "$lib/interfaces/templates/ThemeTemplates";
import { TableViewBaseMapper } from "./EntityMapper";

export class HeroesMapper extends TableViewBaseMapper<HeroModel, HeroEntity, HeroEntityView> {
    objectToModel(object: any): HeroModel {
        var hero = new HeroModel(object.user_id);

        if (object.id) {
            hero.id = object.id;
        }

        hero.theme = object.theme;
        hero.tokenId = isNaN(parseInt(object.tokenId)) ? undefined : parseInt(object.tokenId);
        hero.sheetBackgroundColor = object.sheetBackgroundColor;
        hero.diceIconColor = object.diceIconColor;
        hero.diceBackgroundColor = object.diceBackgroundColor;
        hero.traitKeywords = object.traitKeywords;
        hero.abilityNames = object.abilityNames ? object.abilityNames.split(';') : undefined;
        hero.abilityEffects = object.abilityEffects ? object.abilityEffects.split(';') : undefined;
        hero.heroImage = object.heroImage;
        hero.iconImage = object.iconImage;
        hero.moveAttribute = parseInt(object.moveAttribute);
        hero.attackAttribute = parseInt(object.attackAttribute);
        hero.defendAttribute = parseInt(object.defendAttribute);
        hero.skillAttribute = parseInt(object.skillAttribute);
        hero.focusAttribute = parseInt(object.focusAttribute);
        hero.lifeAttribute = parseInt(object.lifeAttribute);
        hero.awakeningAttribute = parseInt(object.awakeningAttribute);
        hero.actionDice = object.actionDice ? object.actionDice.split(',') : undefined;
        hero.imagePositionLeft = parseInt(object.imagePositionLeft);
        hero.imagePositionTop = parseInt(object.imagePositionTop);
        hero.heroImageScale = parseInt(object.heroImageScale);
        hero.isSupportFigure = false;
        hero.augsLicense = object.augsLicense;
        hero.dateCreated = object.dateCreated;
        hero.dateModified = object.dateModified;
        hero.homebrewCategory = HomebrewCategoriesEnum.Heroes;
        hero.isDeleted = object.isDeleted;
        hero.userId = object.userId;
        hero.description = object.description;
        hero.name = object.name;
        hero.originalImage = object.originalImage;
        
        return hero;
    }

    modelToEntity(model: HeroModel): HeroEntity {
        var id = 0;
        if (model.id) {
            id = parseInt(model.id.toString()) ?? 0; 
        }

        return {
            id: id,
            ability_effects: model.abilityEffects!,
            ability_names: model.abilityNames!,
            action_dice: model.actionDice!,
            attack_attribute: model.attackAttribute!,
            awakening_attribute: model.awakeningAttribute!,
            defend_attribute: model.defendAttribute!,
            dice_background_color: model.diceBackgroundColor!,
            dice_icon_color: model.diceIconColor!,
            focus_attribute: model.focusAttribute!,
            hero_image: model.heroImage!,
            hero_image_position_left: model.imagePositionLeft!,
            hero_image_position_top: model.imagePositionTop!,
            hero_image_scale: model.heroImageScale!,
            icon_image: model.iconImage!,
            is_support_figure: model.isSupportFigure!,
            life_attribute: model.lifeAttribute!,
            move_attribute: model.moveAttribute!,
            sheet_background_color: model.sheetBackgroundColor!,
            skill_attribute: model.skillAttribute!,
            theme: model.theme!,
            token_id: model.tokenId!,
            trait_keywords: model.traitKeywords!
        }
    }
    
    entityToModel(entity: HeroEntityView): HeroModel {
        var hero = new HeroModel(entity.user_id ?? '');
        
        if (entity.id) {
            hero.id = entity.id;
        }

        if (entity.theme) {
            hero.theme = ThemeTemplatesEnum[entity.theme];
        }

        hero.tokenId = entity.token_id!;
        hero.sheetBackgroundColor = entity.sheet_background_color!;
        hero.diceIconColor = entity.dice_icon_color!;
        hero.diceBackgroundColor = entity.dice_background_color!;
        hero.traitKeywords = entity.trait_keywords ?? '';
        hero.abilityNames = entity.ability_names ?? undefined;
        hero.abilityEffects = entity.ability_effects ?? undefined;
        hero.heroImage = entity.hero_image!;
        hero.iconImage = entity.icon_image!;
        hero.moveAttribute = entity.move_attribute!;
        hero.attackAttribute = entity.attack_attribute!;
        hero.defendAttribute = entity.defend_attribute!;
        hero.skillAttribute = entity.skill_attribute!;
        hero.focusAttribute = entity.focus_attribute!;
        hero.lifeAttribute = entity.life_attribute!;
        hero.awakeningAttribute = entity.awakening_attribute!;

        if (entity.action_dice) {
            hero.actionDice = [ DiceIconsEnum[entity.action_dice[0]], DiceIconsEnum[entity.action_dice[1]], DiceIconsEnum[entity.action_dice[2]], DiceIconsEnum[entity.action_dice[3]], DiceIconsEnum[entity.action_dice[4]], DiceIconsEnum[entity.action_dice[5]] ];
        }

        hero.imagePositionLeft = entity.hero_image_position_left!;
        hero.imagePositionTop = entity.hero_image_position_top!;
        hero.heroImageScale = entity.hero_image_scale!;
        hero.isSupportFigure = false;
        hero.augsLicense = AugsLicensesEnum[entity.augs_license!];
        hero.dateCreated = new Date(entity.date_created!);
        hero.dateModified = new Date(entity.date_modified!);
        hero.homebrewCategory = HomebrewCategoriesEnum[entity.homebrew_category!];
        hero.isDeleted = entity.is_deleted!;
        hero.userId = entity.user_id!;
        hero.description = entity.description!;
        hero.name = entity.name!;
        hero.originalImage = entity.original_image!;
        
        return hero;
    }
}