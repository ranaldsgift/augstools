<script lang="ts">
    import homebrewTypes from '$lib/data/homebrewTypeData.json'
    import ComicCard from '../../components/ComicCard.svelte';
    import { writable, type Writable } from 'svelte/store';
</script>

<ul class="grid grid-cols-2 m-auto gap-4 w-80">
    {#each homebrewTypes as homebrewType}
    <a href="/homebrew/{homebrewType.name.toLowerCase()}/" class="grid">
        <ComicCard body={homebrewType.name} useBackground={false}></ComicCard>
    </a>
    {/each}
</ul>