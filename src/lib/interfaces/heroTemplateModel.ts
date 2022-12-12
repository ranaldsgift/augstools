export interface HeroSheetTemplate {
    theme_id: number;
    template_name?: string;
    background_image?: string;
    icon?: PositionedTemplateContainer;
    image?: PositionedTemplateContainer;
    background_color?: string;
    name?: PositionedTemplateText;
    traits?: PositionedTemplateText;
    ability_name?: PositionedTemplateText;
    ability_effect?: PositionedTemplateText;
    move_value?: PositionedTemplateText;
    attack_value?: PositionedTemplateText;
    defend_value?: PositionedTemplateText;
    skill_value?: PositionedTemplateText;
    focus_value?: PositionedTemplateText;
    life_value?: PositionedTemplateText;
    awakening_value?: PositionedTemplateText;
    action_dice?: [PositionedTemplateContainer, PositionedTemplateContainer, PositionedTemplateContainer, PositionedTemplateContainer, PositionedTemplateContainer, PositionedTemplateContainer]
}

export interface PositionedTemplateText {
    size: [number, number],
    position: [number, number],
    font: string,
    font_size: string
}

export interface PositionedTemplateContainer {
    color?: string;
    background_color?: string,
    border_color?: string,
    border_radius?: string,
    size: [number, number],
    position: [number, number]
}

export interface PositionedTemplateImage {
    url: string,
    size: [number, number],
    position: [number, number]
}

//TODO finish making default sheet templates for BTAS and TMNT herewwww
export const HeroSheetTemplates: HeroSheetTemplate[] = [
    {
        theme_id: 1,
        template_name: 'TMNT',
        background_image: '',
        icon: { size: [80, 80], position: [20, 20] },
        image: { size: [388, 485], position: [0, 50] },
        name: { size: [200, 20], position: [100, 200], font: 'bangersregular', font_size: '40px' },
        traits: { size: [200, 20], position: [100, 200], font: 'bangersregular', font_size: '40px' },
        ability_name: { size: [200, 20], position: [100, 200], font: 'bangersregular', font_size: '40px' },
        ability_effect: { size: [200, 20], position: [100, 200], font: 'bangersregular', font_size: '40px' }
    }
]

export enum TemplateThemes {
    TMNT = 0,
    BTAS = 1
}