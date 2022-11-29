import DataModel from "./interfaces/dataModel";

export default class HeroModel extends DataModel {
    constructor() {
        super();
        this.name = '';
        this.themeId = 0;
        this.token = '';
        this.backgroundColor = "#fff";
        this.diceIconColor = "#000"
        this.diceBackgroundColor = "#adadad"
        this.traits = [];
        this.isSupportFigure = false;
        this.nameFontSize = 14;
        this.traitsFontSize = 12;
        this.abilityNames = [];
        this.abilityEffects = [];
        this.abilityNamesFontSize = 12
        this.abilityEffectsFontSize = 12
        this.iconImage = '';
        this.heroImage = '';
        this.moveAttribute = 0;
        this.attackAttribute = 0;
        this. defendAttribute = 0;
        this.skillAttribute = 0;
        this.focusAttribute = 0;
        this.lifeAttribute = 0;
        this.awakeningAttribute = 0;
        this.actionDice = [];
    }

    themeId: number;
    token: string;
    backgroundColor: string;
    diceIconColor: string;
    diceBackgroundColor: string;
    name: string;
    traits: string[];
    isSupportFigure: boolean;
    nameFontSize: number;
    traitsFontSize: number;
    abilityNames: string[];
    abilityEffects: string[];
    abilityNamesFontSize: number;
    abilityEffectsFontSize: number;
    iconImage: string;
    heroImage: string;
    moveAttribute: number;
    attackAttribute: number;
    defendAttribute: number;
    skillAttribute: number;
    focusAttribute: number;
    lifeAttribute: number;
    awakeningAttribute: number;
    actionDice: number[];
}