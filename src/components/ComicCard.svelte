<script lang="ts">
    import backgroundUrl from '../images/overlays/zoom.jpg';
    export let title = '';
    export let description = '';
    export let icon = '';
    export let useBackground = true;
</script>

    <div class="card comic-card comic-text">
        {#if useBackground}
        <div class="comic-background" style="background-image: url('{backgroundUrl}')"></div>
        {/if}
        {#if title.length > 0}
        <header class="card-header">
            <h1 class="font-bold text-lg pb-2 text-tertiary-600">{title}</h1>
        </header>
        {/if}
        {#if icon.length > 0}
        <div class="card-body">
            <iconify-icon icon="{icon}"></iconify-icon>
        </div>
        {/if}
        {#if description.length > 0}
        <footer class="card-footer">
            <p class="text-gray-700">{description}</p>
        </footer>
        {/if}
    </div>