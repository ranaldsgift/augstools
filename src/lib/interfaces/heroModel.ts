import type { Database } from "src/schema";
import type { HomebrewModel } from "./homebrewModel";

export interface HeroModel extends HomebrewModel {    
    heroId: number
    theme: string //change to ThemeModel
    token: string //change to TokenModel
    sheetBackgroundColor: string
    diceIconColor: string
    diceBackgroundColor: string
    traitKeywords: string[]
    abilityNames: string[]
    abilityEffects: string[]
    iconImage: string | null
    heroImage: string
    moveAttribute: number
    attackAttribute: number
    defendAttribute: number
    skillAttribute: number
    focusAttribute: number
    lifeAttribute: number
    awakeningAttribute: number
    actionAice: Database["public"]["Enums"]["dice_icons"][]
    isSupportFigure: boolean
}