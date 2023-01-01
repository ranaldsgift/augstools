import { DiceIconsEnum, HomebrewCategoriesEnum } from "$lib/enums/Enums";
import { HeroModel } from "$lib/interfaces/HeroModel";
import type { HomebrewModel } from "$lib/interfaces/HomebrewModel";
import { ThemeTemplatesEnum } from "$lib/interfaces/templates/ThemeTemplates";

export class HomebrewFactory {
    public static new<TModel extends HomebrewModel>(userId: string, category: HomebrewCategoriesEnum): TModel {

        var model: any;

        switch (category) {
            case HomebrewCategoriesEnum.Heroes:
            default:
                var heroModel = new HeroModel(userId);
        
                heroModel.moveAttribute = 3,
                heroModel.attackAttribute = 3,
                heroModel.defendAttribute = 3,
                heroModel.skillAttribute = 3,
                heroModel.focusAttribute = 3,
                heroModel.lifeAttribute = 16,
                heroModel.awakeningAttribute = 8,
                heroModel.actionDice = [ DiceIconsEnum.Move, DiceIconsEnum.Melee, DiceIconsEnum.Range, DiceIconsEnum.DoubleMove, DiceIconsEnum.DefendMelee, DiceIconsEnum.Focus],
                heroModel.diceBackgroundColor = '#447260',
                heroModel.sheetBackgroundColor = '#447260',
                heroModel.diceIconColor = '#efdcc1',
                heroModel.heroImageScale = 100,
                heroModel.imagePositionLeft = 0,
                heroModel.imagePositionTop = 0,
                heroModel.theme = ThemeTemplatesEnum.TMNT;
                heroModel.tokenId = 1;

                model = heroModel;
        }
        return model;
    }
}