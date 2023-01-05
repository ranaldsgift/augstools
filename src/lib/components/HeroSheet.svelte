<script lang="ts">
    import PositionedContainer from "./PositionedContainer.svelte";
    import PositionedTextEditor from "./PositionedItemEditor.svelte";
    import { modalStore, RadioGroup, RadioItem, tooltip, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
    import HeroActionDiceForm from "./ActionDiceForm.svelte";
    import ActionDiceIcon from "./ActionDiceIcon.svelte";
    import { DiceIconsEnum } from "$lib/enums/Enums";
    import ModalFormEditor from "./ModalFormEditor.svelte";
    import ComicButton from "./ComicButton.svelte";
    import PositionedImageEditor from "./PositionedImageEditor.svelte";
    import { ThemeTemplates, ThemeTemplatesEnum } from "$lib/interfaces/templates/ThemeTemplates";
    import type { FormField } from "$lib/interfaces/templates/HtmlTemplates";
    import type { HeroModel } from "$lib/interfaces/HeroModel";
    import { writable, type Writable } from "svelte/store";

    export let template = ThemeTemplates.TMNT.heroSheet;
    export let hero: HeroModel;
    export let scale: number = 1.0

    if (hero.theme) {
        template = ThemeTemplates[hero.theme].heroSheet;
    }

    const themeSelection: Writable<string> = writable(hero.theme ?? ThemeTemplatesEnum.TMNT);
    themeSelection.subscribe(value => { 
        var theme = value as ThemeTemplatesEnum;

        if (hero.theme != theme) {
            hero.theme = theme;
            template = ThemeTemplates[theme].heroSheet;
        }
    });

    function handleActionDiceEdit(index: number) {
        const icon = hero.actionDice ? hero.actionDice[index] : DiceIconsEnum.Move;
		const c: ModalComponent = { ref: HeroActionDiceForm, props: { "theme": hero.theme, "icon": icon } };
		const d: ModalSettings = {
			type: 'component',
			title: 'Select an Action Dice Icon',
			component: c,
			response: (actionDie: any) => {
				if (!actionDie)
                    return;
                
                hero.actionDice![index] = actionDie;
                hero = hero;
			}
		};
		modalStore.trigger(d);
    }

    function handleAddAbility() {
        const formFields: FormField[] = [
            {
                name: 'ability_name',
                type: 'text',
                value: ''
            },
            {
                name: 'ability_effect',
                type: 'textarea',
                value: ''
            }
        ]


		const c: ModalComponent = { ref: ModalFormEditor, props: { fields: JSON.stringify(formFields) } };
		const d: ModalSettings = {
			type: 'component',
			title: 'Add a Hero Ability',
			component: c,
			response: (fields: FormField[]) => {
				if (!fields)
                    return;
                
                var abilityName = fields.find(field => field.name == 'ability_name')?.value;
                var abilityEffect = fields.find(field => field.name == 'ability_effect')?.value;

                if (!abilityName || !abilityEffect) {
                    return;
                }
                
                if (!hero.abilityNames) {
                    hero.abilityNames = [];
                }

                if (!hero.abilityEffects) {
                    hero.abilityEffects = [];
                }

                hero.abilityNames.push(abilityName);
                hero.abilityEffects.push(abilityEffect);

                hero = hero;
			}
		};
		modalStore.trigger(d);
    }

    function handleEditAbility(index: number) {
        const abilityName = hero.abilityNames && hero.abilityNames.length > index ? hero.abilityNames[index] : '';
        const abilityEffect = hero.abilityEffects && hero.abilityEffects.length > index  ? hero.abilityEffects[index] : '';

        const formFields: FormField[] = [
            {
                name: 'ability_name',
                type: 'text',
                value: abilityName
            },
            {
                name: 'ability_effect',
                type: 'textarea',
                value: abilityEffect
            }
        ]

        const c: ModalComponent = { ref: ModalFormEditor, props: { fields: JSON.stringify(formFields) } };
        const d: ModalSettings = {
            type: 'component',
            title: 'Edit Hero Ability',
            component: c,
            response: (fields: FormField[]) => {
                if (!fields || !hero.abilityNames || !hero.abilityEffects) {
                    return;
                }

                var abilityName = fields.find(field => field.name == 'ability_name')?.value;
                var abilityEffect = fields.find(field => field.name == 'ability_effect')?.value;

                if (!abilityName || !abilityEffect) {
                    return;
                }

                hero.abilityNames[index] = abilityName;
                hero.abilityEffects[index] = abilityEffect;

                hero = hero;
            }
        };
        modalStore.trigger(d);
    }

    function getAbilityNameFontSize() {
        var fontSize = hero.abilityNameFontSize && hero.abilityNameFontSize > 0 ? hero.abilityNameFontSize * scale : template.ability_name.font_size * scale;
        return `${fontSize}px`;
    }
</script>

<style>
    .hero-sheet-container {
        background-repeat: no-repeat;
        width: calc(700px * var(--scale));
        height: calc(566px * var(--scale));
        box-shadow: black 0 0 3px 1px;
        border-radius: 5px;
        position: relative;
        background-size: contain;
    }
    :global(.positioned-container:hover .add-ability-button) {
        display: flex;
        justify-content: center;
    }
    .hero-sheet-container[data-theme="BTAS"] .hero-action-dice-container button {
        border: none !important;
        border-radius: 0 !important;
    }
    .hero-action-dice-container button:hover {
        filter: contrast(1.5);
    }
    .hero-sheet-container[data-theme="TMNT"] .hero-action-dice-container, .hero-sheet-container[data-theme="TMNT"] :global(.positioned-text) {
        transform: skew(1.7deg, -1.7deg);
    }
    .hero-sheet-container[data-theme="TMNT"] :global(.hero-action-dice-container), .hero-sheet-container[data-theme="TMNT"] :global(.positioned-container) {
        transform: skew(1deg, -1deg);
    }
    .hero-overlay-image {
        width: 100%;
        height: 100%;
        position: absolute;
        pointer-events: none;
        z-index: 2;
    }
    label input {
        width: 100%;
    }
    .form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    div.form>div {
        display: flex;
        gap: 1rem;
        align-items: flex-end;
    }
    div.form>div>* {
        flex: 1;
    }
    form {
        max-width: 1500px;  
		grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
        gap: 30px;
    }
    .hero-sheet-container :global(input[name="heroImage"] + button.positioned-image) {
        z-index: 0;
    }
    .hero-sheet-container[data-theme="BTAS"] :global(input[name="traitKeywords"] + button.positioned-text) {
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .hero-sheet-container[data-theme="BTAS"] :global(input[name="name"] + button.positioned-text) {
        text-shadow: 3px 3px 1px black;
        margin-left: -2px;
        display: grid;
        align-content: end;
    }
    :global(.ability-container *), :global(.hero-attribute-container *), :global(.hero-action-dice-container *) {
        z-index: 3;
    }
    .hero-sheet-container[data-theme="BTAS"] .hero-action-dice-container :global(.positioned-container) {
        border: 2px solid transparent;
        background: linear-gradient(#777777 0%, #fff 25%, #fff 75%, #777777 100%) border-box;
        border-radius: 4px;
    }
    .hero-sheet-container[data-theme="BTAS"] .ability-container p {
        letter-spacing: 1px;
    }
    .hero-sheet-container[data-theme="BTAS"] .hero-attribute-container>:global(button) {
        text-shadow: -2px -2px 0px black, 2px 2px 0px black, -2px 2px 0px black, 2px -2px 0px black;
    }
    .hero-sheet-container[data-theme="BTAS"] p.hero-ability-name {
        background: linear-gradient(to right, #77777700 5%, #ffffff70 25%, #ffffff70 75%, #77777700 95%)     left     bottom  no-repeat;
        background-size: 100% 1px;
        margin-bottom: 4px;
    }
    .theme-fields-container label {
        pointer-events: none;
    }
    .theme-fields-container input {
        pointer-events: all;
    }
    
    .hero-sheet-container[data-theme="TMNT"] :global(.hero-action-dice-container svg) {
        width: calc(100% - 8px);
        height: calc(100% - 8px);
        top: 4px;
        left: 4px;
        position: relative;
    }
    
    .hero-sheet-container[data-theme="BTAS"] :global(.hero-action-dice-container svg) {
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        top: 2px;
        left: 2px;
        position: relative;
    }
</style>

<div class="hero-sheet-container" style:--scale={scale} data-theme={template.template_name} style:background-image="url('{template.background_image}')" style:background-color={hero.sheetBackgroundColor}>
    {#if template.overlay_image}
    <div class="hero-overlay-image" style:background-image="url('{template.overlay_image}')" style:background-size="contain"></div>
    {/if}
    <PositionedImageEditor name="iconImage" title="Icon Image URL" bind:template={template.icon} bind:imageUrl={hero.iconImage}>
    </PositionedImageEditor>
    <PositionedImageEditor name="heroImage" title="Hero Image URL" template={template.image} bind:imageUrl={hero.heroImage} bind:imageScale={hero.heroImageScale} bind:left={hero.imagePositionLeft} bind:top={hero.imagePositionTop}>
    </PositionedImageEditor>
    <PositionedTextEditor name="name" template={template.name} bind:content={hero.name} bind:fontSize={hero.nameFontSize} placeholder="Hero Name" alignment="left">
    </PositionedTextEditor>    
    <PositionedTextEditor name="traitKeywords" template={template.traits} bind:content={hero.traitKeywords} bind:fontSize={hero.keywordsFontSize} placeholder="Factions • Keywords" alignment="left">
    </PositionedTextEditor>
    <div class="hero-attribute-container">
        <PositionedTextEditor name="moveAttribute" type="number" template={template.move_value} bind:content={hero.moveAttribute}>
        </PositionedTextEditor>
        <PositionedTextEditor name="attackAttribute" type="number" template={template.attack_value} bind:content={hero.attackAttribute}>
        </PositionedTextEditor>
        <PositionedTextEditor name="defendAttribute" type="number" template={template.defend_value} bind:content={hero.defendAttribute}>
        </PositionedTextEditor>
        <PositionedTextEditor name="skillAttribute" type="number" template={template.skill_value} bind:content={hero.skillAttribute}>
        </PositionedTextEditor>
        <PositionedTextEditor name="focusAttribute" type="number" template={template.focus_value} bind:content={hero.focusAttribute}>
        </PositionedTextEditor>
        <PositionedTextEditor name="lifeAttribute" type="number" template={template.life_value} bind:content={hero.lifeAttribute}>
        </PositionedTextEditor>
        <PositionedTextEditor name="awakeningAttribute" type="number" template={template.awakening_value} bind:content={hero.awakeningAttribute}>
        </PositionedTextEditor>
    </div>
    <PositionedContainer className="ability-container" template={template.ability_container}>
        {#if hero.abilityNames && hero.abilityEffects}
            {#each hero.abilityNames as name, index}
            <input type="hidden" name="abilityNames" hidden bind:value={name}>
            <input type="hidden" name="abilityEffects" hidden bind:value={hero.abilityEffects[index]}>
                <button style:position="relative" on:click|preventDefault={() => handleEditAbility(index) }>
                    <p
                        class="hero-ability-name text-center pb-1" 
                        style:font-family={template.ability_name.font}
                        style:font-size="{hero.abilityNameFontSize && hero.abilityNameFontSize > 0 ? hero.abilityNameFontSize * scale : template.ability_name.font_size * scale}px"
                        style:line-height="{hero.abilityNameFontSize && hero.abilityNameFontSize > 0 ? hero.abilityNameFontSize * scale : template.ability_name.font_size * scale}px"
                        style:color={template.ability_name.font_color}
                    >{name}</p>
                    <p 
                        style:white-space="pre-wrap"
                        class="hero-ability-effect pb-4 text-center" 
                        style:font-family={template.ability_effect.font}
                        style:font-size="{hero.abilityEffectFontSize && hero.abilityEffectFontSize > 0 ? hero.abilityEffectFontSize * scale : template.ability_effect.font_size * scale}px"
                        style:line-height="{hero.abilityEffectFontSize && hero.abilityEffectFontSize > 0 ? hero.abilityEffectFontSize * scale : template.ability_effect.font_size * scale + 2}px"
                        style:color={template.ability_effect.font_color}
                    >{hero.abilityEffects[index]}</p>
                    <iconify-icon icon="mdi:edit" class="hover" hidden></iconify-icon>
                </button>
            {/each}
        {:else}
            <p 
                class="hero-ability-name text-center pb-1" 
                style:font-family={template.ability_name.font}
                style:font-size="{hero.abilityNameFontSize && hero.abilityNameFontSize > 0 ? hero.abilityNameFontSize * scale : template.ability_name.font_size * scale}px"
                style:line-height="{hero.abilityNameFontSize && hero.abilityNameFontSize > 0 ? hero.abilityNameFontSize * scale : template.ability_name.font_size * scale}px"
                style:color={template.ability_name.font_color}
            >Hero Ability Name</p>
            <p 
                class="hero-ability-effect pb-4 text-center" 
                style:font-family={template.ability_effect.font}
                style:font-size="{hero.abilityEffectFontSize && hero.abilityEffectFontSize > 0 ? hero.abilityEffectFontSize * scale : template.ability_effect.font_size * scale}px"
                style:line-height="{hero.abilityEffectFontSize && hero.abilityEffectFontSize > 0 ? hero.abilityEffectFontSize * scale : template.ability_effect.font_size * scale}px"
                style:color={template.ability_effect.font_color}
            >Hero Ability Effect</p>
        {/if}
        <div class="add-ability-button" hidden>
            <ComicButton text="Add Ability" icon="material-symbols:add" callback={handleAddAbility}></ComicButton>
        </div>            
    </PositionedContainer>
    <div class="hero-action-dice-container">
        <input type="hidden" name="actionDice" hidden bind:value={hero.actionDice}>
        {#if hero.actionDice}
            {#each hero.actionDice as action_die, index}
            <input type="hidden" name="dice" hidden bind:value={action_die}>
            <PositionedContainer template={template.action_dice[index]}>
                <button 
                    style:width={'100%'} 
                    style:height={'100%'} 
                    style:background-color={hero.diceBackgroundColor}
                    style:background-repeat="none"
                    style:background-size="contain"
                    style:border="2px solid {hero.diceIconColor}"
                    style:border-radius="5px"
                    on:click|preventDefault={() => { handleActionDiceEdit(index) }}
                >
                    <ActionDiceIcon theme={hero.theme ?? ThemeTemplatesEnum.TMNT} icon={DiceIconsEnum[action_die]} bind:color={hero.diceIconColor}></ActionDiceIcon>
                </button>
            </PositionedContainer>
            {/each}
        {/if}
    </div>
</div>