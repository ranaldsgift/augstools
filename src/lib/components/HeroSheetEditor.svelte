<script lang="ts">
    import { enhance } from "$app/forms";
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
    import HomebrewFields from "./HomebrewFields.svelte";
    import { EnumHelper } from "$lib/helpers/EnumHelper";
    import { HeroModel } from "$lib/interfaces/HeroModel";
    import { writable, type Writable } from "svelte/store";
    import PigeonPeteSays from "./PigeonPeteSays.svelte";

    export let template = ThemeTemplates.TMNT.heroSheet;
    export let heroObject: any;

    heroObject = { ...heroObject };
    Object.setPrototypeOf(heroObject, HeroModel.prototype);
    let hero = heroObject as HeroModel;
    
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
</script>

<style>
    .hero-sheet-container {
        background-repeat: no-repeat;
        width: 700px;
        height: 566px;
        box-shadow: black 0 0 3px 1px;
        border-radius: 5px;
        position: relative;
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

<form method="POST" action="/api/heroes?/save" class="m-auto grid gap-5" use:enhance>
    <HomebrewFields homebrew={hero}></HomebrewFields>
    <div class="grid gap-5">
        <div class="hero-sheet-container" data-theme={hero.theme} style:background-image="url('{template.background_image}')" style:background-color={hero.sheetBackgroundColor}>
            {#if template.overlay_image}
            <div class="hero-overlay-image" style:background-image="url('{template.overlay_image}')"></div>
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
                <input type="hidden" name="abilityNames" hidden bind:value={hero.abilityNames}>
                <input type="hidden" name="abilityEffects" hidden bind:value={hero.abilityEffects}>
                    {#each hero.abilityNames as name, index}
                        <button style:position="relative" on:click|preventDefault={() => handleEditAbility(index) }>
                            <p
                                class="hero-ability-name text-center pb-1" 
                                style:font-family={template.ability_name.font}
                                style:font-size="{hero.abilityNameFontSize ?? template.ability_name.font_size}px"
                                style:line-height="{hero.abilityNameFontSize ?? template.ability_name.font_size}px"
                                style:color={template.ability_name.font_color}
                            >{name}</p>
                            <p 
                                class="hero-ability-effect pb-4 text-center" 
                                style:font-family={template.ability_effect.font}
                                style:font-size="{hero.abilityEffectFontSize ?? template.ability_effect.font_size}px"
                                style:line-height="{hero.abilityEffectFontSize ?? template.ability_effect.font_size + 2}px"
                                style:color={template.ability_effect.font_color}
                            >{hero.abilityEffects[index]}</p>
                            <iconify-icon icon="mdi:edit" class="hover" hidden></iconify-icon>
                        </button>
                    {/each}
                {:else}
                    <p 
                        class="hero-ability-name text-center pb-1" 
                        style:font-family={template.ability_name.font}
                        style:font-size="{hero.abilityNameFontSize ?? template.ability_name.font_size}px"
                        style:line-height="{hero.abilityNameFontSize ?? template.ability_name.font_size}px"
                        style:color={template.ability_name.font_color}
                    >Hero Ability Name</p>
                    <p 
                        class="hero-ability-effect pb-4 text-center" 
                        style:font-family={template.ability_effect.font}
                        style:font-size="{hero.abilityEffectFontSize ?? template.ability_effect.font_size}px"
                        style:line-height="{hero.abilityEffectFontSize ?? template.ability_effect.font_size}px"
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
    </div>
    <div class="form comic-form">
        <header>
            <h1>Customize your Hero</h1>
        </header>
        <div>
            <label class="flex items-center gap-5">
                <span>Theme</span>
                <RadioGroup selected={themeSelection}>
                    {#each EnumHelper.getKeys(ThemeTemplatesEnum) as theme}
                        <RadioItem value={theme}>{theme}</RadioItem>
                    {/each}
                </RadioGroup>
                <select name="theme" bind:value={hero.theme} hidden>
                    {#each EnumHelper.getKeys(ThemeTemplatesEnum) as theme}
                        <option value={theme}>{theme}</option>
                    {/each}
                </select>
            </label>
        </div>
        <div class="theme-fields-container">
            <label>
                <span>Sheet Background Color</span>
                <input type="color" name="sheetBackgroundColor" bind:value={hero.sheetBackgroundColor}>
            </label>
            <label>
                <span>Dice Background Color</span>
                <input type="color" name="diceBackgroundColor" bind:value={hero.diceBackgroundColor}>
            </label>
            <label>
                <span>Dice Icon Color</span>
                <input type="color" name="diceIconColor" bind:value={hero.diceIconColor}>
            </label>
        </div>
        <div class="general-fields-container">
            {#if false}
            <!-- TODO: Allow users to override the hero sheet image with their own
            This would allow users to use their own themes and styles by loading the image specified here
            instead of generating the hero sheet from the data provided -->
            <label use:tooltip={{ content: 'Use this to display a static image for this Hero Sheet instead of one generated from the saved Hero data.'}}>
                <span>Sheet Override</span>
                <input type="text" name="originalImage" bind:value={hero.originalImage}>
            </label>
            {/if}
            <label class="w-full">
                <span>Hero Description</span>
                <textarea name="description" bind:value={hero.description} placeholder="Enter a description of your Hero here. Include details about any special mechanics related to your Hero or any other information."></textarea>
            </label>
        </div>
        <div class="image-fields-container">
            <label>
                <span>Hero Image Scale</span>
                <input type="number" name="heroImageScale" bind:value={hero.heroImageScale}>
            </label>
            <label>
                <span>Hero Image Position Left</span>
                <input type="number" name="imagePositionLeft" bind:value={hero.imagePositionLeft}>
            </label>
            <label>
                <span>Hero Image Position Top</span>
                <input type="number" name="imagePositionTop" bind:value={hero.imagePositionTop}>
            </label>
        </div>
        <div class="font-fields-container">
            <label>
                <span>Hero Name<br/>Font Size</span>
                <input type="number" min="0" step="1" name="nameFontSize" bind:value={hero.nameFontSize} placeholder="10">
            </label>
            <label>
                <span>Keywords<br/>Font Size</span>
                <input type="number" min="0" step="1" name="keywordsFontSize" bind:value={hero.keywordsFontSize}>
            </label>
            <label>
                <span>Ability Name<br/>Font Size</span>
                <input type="number" min="0" step="1" name="abilityNameFontSize" bind:value={hero.abilityNameFontSize}>
            </label>
            <label>
                <span>Ability Effect<br/>Font Size</span>
                <input type="number" min="0" step="1" name="abilityEffectFontSize" bind:value={hero.abilityEffectFontSize}>
            </label>
        </div>
        <div>
            <div class="grid gap-5 pt-2">
                {#if hero.isValid()}
                    <ComicButton text="Save" icon="material-symbols:save"></ComicButton>
                {:else}
                    <div class="disabled-button">
                        <ComicButton text="Save" icon="material-symbols:save"></ComicButton>
                    </div>
                    <PigeonPeteSays>
                        <p>To save your Hero, please complete the following fields:</p>
                        <p class="text-warning-800 unstyled">{hero.validityErrors()}</p>
                    </PigeonPeteSays>
                {/if}        
            </div>
        </div>
    </div>
</form>