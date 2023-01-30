import type { PositionedItem, PositionedTemplateContainer, PositionedTemplateText } from "./HtmlTemplates";
import type { ThemeTemplatesEnum } from "./ThemeTemplatesEnum";

export interface SkillCardTemplate {
    background_image: string
    overlay_image?: string
    image: PositionedItem
    name: PositionedTemplateText
    ability: PositionedTemplateText
    character_name: PositionedTemplateText
}

export const SkillCardTemplates: Record<ThemeTemplatesEnum, SkillCardTemplate> = {
    TMNT: {
        background_image: '/images/homebrew%20templates/TMNT/skill-card-background.png',
        overlay_image: '/images/homebrew%20templates/TMNT/skill-card-overlay.png',
        image: { size: { width: '388px', height: '485px' }, position: { left: '0px', top: '81px' } },
        name: { size: { width: '300px', height: '250px' }, position: { left: '25px', top: '200px' }, font: 'bangersregular', font_size: 62, font_color: 'white' },
        ability:  {size: { width: '426px', height: '205px' }, position: { left: '80px', top: '488px' }, font: 'smackattack_bbregular', font_size: 20, font_color: 'black' },
        character_name:  {size: { width: '426px', height: '25px' }, position: { left: '80px', top: '705px' }, font: 'smackattack_bbregular', font_size: 16, font_color: 'white' },
    },
    BTAS: {
        background_image: '/images/homebrew%20templates/TMNT/skill-card-background.png',
        overlay_image: '/images/homebrew%20templates/TMNT/skill-card-overlay.png',
        image: { size: { width: '388px', height: '485px' }, position: { left: '0px', top: '81px' } },
        name: { size: { width: '300px', height: '245px' }, position: { left: '25px', top: '200px' }, font: 'BebasNeueBold', font_size: 72, font_color: 'white' },
        ability:  {size: { width: '300px', height: '40px' }, position: { left: '25px', top: '450px' }, font: 'BebasNeueBold', font_size: 26, font_color: 'white' },
        character_name:  {size: { width: '426px', height: '205px' }, position: { left: '80px', top: '488px' }, font: 'smackattack_bbregular', font_size: 20, font_color: 'black' },
    },
}