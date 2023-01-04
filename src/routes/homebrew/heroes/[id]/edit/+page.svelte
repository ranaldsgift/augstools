<script lang="ts">
    import HeroEditor from '$lib/components/HeroSheetEditor.svelte';
    import { page } from '$app/stores';
    import { Breadcrumb, Crumb } from '@skeletonlabs/skeleton';
    import type { HeroModel } from '$lib/interfaces/HeroModel';
    import PigeonPeteSays from '$lib/components/PigeonPeteSays.svelte';

    const hero: HeroModel = $page.data.heroModel ? JSON.parse($page.data.heroModel) : undefined;
</script>

<svelte:head><title>Edit Your Homebrew</title></svelte:head>

<Breadcrumb>
    <Crumb href='/'>
        <span>Home</span>
    </Crumb>
    <Crumb href='/homebrew'>
        <span>Homebrew</span>
    </Crumb>
    <Crumb href='/homebrew/heroes'>
        <span>Heroes</span>
    </Crumb>
    <Crumb href='/homebrew/heroes/{hero.id}'>{hero.name}</Crumb>
    <Crumb>Edit</Crumb>
</Breadcrumb>

{#if $page.data.session}
    {#if !hero}
        <p>There is no data available for this Homebrew.</p>
    {:else}
        <HeroEditor heroObject={hero}></HeroEditor>
    {/if}

{:else}
<div class="flex justify-center">
    <PigeonPeteSays>
        <p>Please login to create homebrew content.</p>
    </PigeonPeteSays>
</div>
{/if}