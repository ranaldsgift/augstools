<script lang="ts">
    import { enhance } from "$app/forms";
    import PositionedContainer from "./PositionedContainer.svelte";
    import PositionedTextEditor from "./PositionedItemEditor.svelte";
    import { modalStore, RadioGroup, RadioItem, Toast, tooltip, type ModalComponent, type ModalSettings, type ToastSettings } from '@skeletonlabs/skeleton';
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
    import PositionedItem from "./PositionedItem.svelte";
    import HeroSheet from "./HeroSheet.svelte";
    import { toastStore } from '@skeletonlabs/skeleton';

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

    async function handleSave() {
            
            hero = hero;
            const t: ToastSettings = {
                message: 'Saved',
                preset: 'success',
                autohide: true,
                timeout: 1000
            };
            toastStore.trigger(t);

    }
</script>

<style>
    :global(.positioned-container:hover .add-ability-button) {
        display: flex;
        justify-content: center;
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
        max-width: 1566px;  
		grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
        gap: 30px;
    }
    :global(.ability-container *), :global(.hero-attribute-container *), :global(.hero-action-dice-container *) {
        z-index: 3;
    }
    .theme-fields-container label {
        pointer-events: none;
    }
    .theme-fields-container input {
        pointer-events: all;
    }
</style>

<form method="POST" action="/api/heroes?/save" class="m-auto grid gap-5"
    use:enhance={() => {
        return async ({update}) => {
            handleSave();
            await update();
        }
    }}
>
    <HomebrewFields homebrew={hero}></HomebrewFields>
    <input name="tokenId" type="hidden" bind:value={hero.tokenId}>
    <div class="grid gap-5">
        <HeroSheet bind:hero={hero} bind:template={template}></HeroSheet>
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
                <input type="number" min="0" step="1" name="nameFontSize" bind:value={hero.nameFontSize} placeholder={template.name.font_size.toString()}>
            </label>
            <label>
                <span>Keywords<br/>Font Size</span>
                <input type="number" min="0" step="1" name="keywordsFontSize" bind:value={hero.keywordsFontSize} placeholder={template.traits.font_size.toString()}>
            </label>
            <label>
                <span>Ability Name<br/>Font Size</span>
                <input type="number" min="0" step="1" name="abilityNameFontSize" bind:value={hero.abilityNameFontSize} placeholder={template.ability_name.font_size.toString()}>
            </label>
            <label>
                <span>Ability Effect<br/>Font Size</span>
                <input type="number" min="0" step="1" name="abilityEffectFontSize" bind:value={hero.abilityEffectFontSize} placeholder={template.ability_effect.font_size.toString()}>
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