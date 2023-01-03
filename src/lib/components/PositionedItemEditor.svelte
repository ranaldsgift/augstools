<script lang="ts">
    import { StringHelper } from "$lib/helpers/StringHelper";
    import type { FormField, PositionedTemplateText } from "$lib/interfaces/templates/HtmlTemplates";
    import { modalStore, type ModalComponent, type ModalSettings } from "@skeletonlabs/skeleton";
    import ModalFormEditor from "./ModalFormEditor.svelte";

    export let template: PositionedTemplateText;
    export let content: string | number | undefined;
    export let alignment: string = "center";
    export let name: string;
    export let title: string = StringHelper.toTitleCase(name);
    export let type: string = 'text';
    export let placeholder: string = '';
    export let fontSize: number | undefined = undefined;

    function handleEdit() {
        const formFields: FormField[] = [{
            name,
            type,
            value: content
        }]

        const c: ModalComponent = { ref: ModalFormEditor, props: { fields: JSON.stringify(formFields) } };
        const d: ModalSettings = {
            type: 'component',
            title: title.length == 0 ? undefined : title,
            component: c,
            response: (response: any) => {
                if (response[0] && response[0].value.toString().length > 0) {
                    content = response[0].value;    
                }
            }
        };
        modalStore.trigger(d);
    }
</script>

<style>
    .positioned-text {
        position: absolute;
        left: var(--left);
        top: var(--top);
        width: var(--width);
        height: var(--height);
        font-family: var(--font);
        font-size: var(--fontSize);
        line-height: var(--fontSize);
        color: var(--fontColor);
        text-align: var(--textAlign);
    }
</style>

<input type="hidden" {name} bind:value={content}>
<button 
    class="positioned-text" 
    style:--left={template.position.left}
    style:--top={template.position.top}
    style:--width={template.size.width}
    style:--height={template.size.height}
    style:--font={template.font}
    style:--fontSize="{!fontSize || fontSize == 0 ? template.font_size : fontSize}px"
    style:--fontColor={template.font_color}
    style:--textAlign={alignment}
    on:click|preventDefault={handleEdit}
>
    {content ?? placeholder}
    <iconify-icon icon="mdi:edit" class="hover" hidden></iconify-icon>
    <slot></slot>
</button>