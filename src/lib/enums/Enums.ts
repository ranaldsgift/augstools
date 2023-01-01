import type { Database } from 'src/schema'

export type HomebrewCategoriesEnumKey = Database["public"]["Enums"]["homebrew_categories"]
export type AugsLicensesEnumKey = Database["public"]["Enums"]["augs_licenses"]
export type DiceIconsEnumKey = Database["public"]["Enums"]["dice_icons"]
export type SkillCardIconsEnumKey = Database["public"]["Enums"]["skill_card_icons"]
export type TokenCategoriesEnumKey = Database["public"]["Enums"]["token_categories"]

export enum HomebrewCategoriesEnum {
    Heroes = "Heroes",
    Villains = "Villains",
    MapTiles = "MapTiles",
    Tokens = "Tokens",
    Scenarios = "Scenarios",
    EventDecks = "EventDecks",
    SkillCards = "SkillCards",
    VillainDecks = "VillainDecks",
    Gadgets = "Gadgets",
    Allies = "Allies"
}

export enum AugsLicensesEnum {
    TMNT = "TMNT",
    BTAS = "BTAS",
    Homebrew = "Homebrew"
}

export enum DiceIconsEnum {
    Melee = "Melee",
    Range = "Range",
    Move = "Move",
    Defend = "Defend",
    Focus = "Focus",
    DoubleMelee = "DoubleMelee",
    DoubleRange = "DoubleRange",
    DoubleMove = "DoubleMove",
    DefendMelee = "DefendMelee",
    DefendRange = "DefendRange",
    DefendMove = "DefendMove"
}