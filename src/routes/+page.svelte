<script>
    import homepageData from '$lib/data/homepageData.json'
    import ComicCard from '../components/ComicCard.svelte';
</script>

<style>
    div {
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
</style>

<div class="grid gap-5 max-w-5xl m-auto px-8">
    {#each homepageData as homepageItem}
        <a class="grid unstyled" href="{homepageItem.url}" target="{homepageItem.linkTarget}" rel="noreferrer">
            <ComicCard title={homepageItem.title} icon={homepageItem.icon} description={homepageItem.description}></ComicCard>
        </a>
    {/each}
</div>