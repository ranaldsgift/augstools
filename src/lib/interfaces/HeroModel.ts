import { DiceIconsEnum, HomebrewCategoriesEnum } from "$lib/enums/Enums";
import type { Database } from "src/schema";
import { HomebrewModel } from "./HomebrewModel";
import type { ThemeTemplatesEnum } from "./templates/ThemeTemplates";

export type HeroEntity = Database["public"]["Tables"]["heroes"]["Row"];
export type HeroActionDice = [DiceIconsEnum, DiceIconsEnum, DiceIconsEnum, DiceIconsEnum, DiceIconsEnum, DiceIconsEnum];

export class HeroModel extends HomebrewModel {

    constructor(userId: string) {
        super(userId, HomebrewCategoriesEnum.Heroes);

        this.actionDice = [ DiceIconsEnum.Move, DiceIconsEnum.Melee, DiceIconsEnum.Defend, DiceIconsEnum.Range, DiceIconsEnum.DefendMelee, DiceIconsEnum.Focus ];
        this.diceIconColor = "#343434";
        this.diceBackgroundColor = "#adadad";
        this.sheetBackgroundColor = "#727272";
    }
    
    themeId?: number //change to ThemeModel
    theme?: ThemeTemplatesEnum
    tokenId?: number //change to TokenModel
    sheetBackgroundColor?: string
    diceIconColor?: string
    diceBackgroundColor?: string
    traitKeywords?: string
    abilityNames?: string[]
    abilityEffects?: string[]
    iconImage?: string
    heroImage?: string
    heroImageScale?: number
    imagePositionLeft?: number;
    imagePositionTop?: number;
    moveAttribute?: number
    attackAttribute?: number
    defendAttribute?: number
    skillAttribute?: number
    focusAttribute?: number
    lifeAttribute?: number
    awakeningAttribute?: number
    actionDice?: HeroActionDice
    isSupportFigure?: boolean

    nameFontSize?: number
    keywordsFontSize?: number
    abilityNameFontSize?: number
    abilityEffectFontSize?: number

    public getNameFontSize(): number | undefined {
        if (this.nameFontSize && this.nameFontSize != 0) {
            return this.nameFontSize;
        }
    }

    public isValid(): boolean {
        if (!this.name || !this.traitKeywords || !this.moveAttribute || (!this.abilityNames || this.abilityNames.length == 0) || !this.heroImage || !this.iconImage) {
            return false;
        }

        return true;
    }

    public validityErrors(): string {
        if (this.isValid()) {
            return '';
        }

        var errors = [];

        if (!this.name) {
            errors.push('Hero Name');
        }
        if (!this.traitKeywords) {
            errors.push('Keywords');
        }
        if (!this.heroImage) {
            errors.push('Hero Image')
        }
        if (!this.iconImage) {
            errors.push('Icon Image')
        }
        if (!this.abilityNames || this.abilityNames.length == 0) {
            errors.push('Ability Name');
        }
        if (!this.abilityEffects || this.abilityEffects.length == 0) {
            errors.push('Ability Effect');
        }
        
        return errors.join(', ');
    }
}
