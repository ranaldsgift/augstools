import { DiceIconTemplates, type DiceIconTemplate } from "./DiceIconTemplates";
import { HeroSheetTemplates, type HeroSheetTemplate } from "./HeroTemplates";

export interface ThemeTemplate {
    theme: ThemeTemplatesEnum
    heroSheet: HeroSheetTemplate
    diceIcons: DiceIconTemplate
}

export enum ThemeTemplatesEnum {
    TMNT = "TMNT",
    BTAS = "BTAS"
}

export const ThemeTemplates: Record<ThemeTemplatesEnum, ThemeTemplate> = {
    TMNT: {
        theme: ThemeTemplatesEnum.TMNT,
        heroSheet: HeroSheetTemplates[ThemeTemplatesEnum.TMNT],
        diceIcons: DiceIconTemplates[ThemeTemplatesEnum.TMNT]
    },
    BTAS: {
        theme: ThemeTemplatesEnum.BTAS,
        heroSheet: HeroSheetTemplates[ThemeTemplatesEnum.BTAS],
        diceIcons: DiceIconTemplates[ThemeTemplatesEnum.BTAS]
    }
}