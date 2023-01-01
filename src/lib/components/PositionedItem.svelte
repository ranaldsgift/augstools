<script lang="ts">
    import type { PositionedTemplateText } from "$lib/interfaces/templates/HtmlTemplates";

    export let template: PositionedTemplateText;
    export let content: string | number = '';
    export let alignment: string = "center";
    export let fontSize: number = 0;
    
    let fontSizeValue = fontSize == 0 ? `${template.font_size}px` : `${fontSize}px`;
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
        color: var(--fontColor);
        text-align: var(--textAlign);
    }
</style>

<span 
    class="positioned-text" 
    style:--left={template.position.left}
    style:--top={template.position.top}
    style:--width={template.size.width}
    style:--height={template.size.height}
    style:--font={template.font}
    style:--fontSize={fontSizeValue}
    style:--fontColor={template.font_color}
    style:--textAlign={alignment}
>
    {content}
</span>