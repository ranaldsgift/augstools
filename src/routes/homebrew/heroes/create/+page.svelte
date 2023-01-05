<script lang="ts">
    import HeroEditor from '$lib/components/HeroSheetEditor.svelte';
    import { page } from '$app/stores';
    import { HomebrewCategoriesEnum } from '$lib/enums/Enums';
    import { Breadcrumb, Crumb } from '@skeletonlabs/skeleton';
    import { StringHelper } from '$lib/helpers/StringHelper';
    import PigeonPeteSays from '$lib/components/PigeonPeteSays.svelte';

    const hero = $page.data.heroModel ? JSON.parse($page.data.heroModel) : undefined;
</script>

<svelte:head><title>Create Your Homebrew</title></svelte:head>

<Breadcrumb>
    <Crumb href='/'>
        <span>Home</span>
    </Crumb>
    <Crumb href='/create'>
        <span>Create</span>
    </Crumb>
    <Crumb>Heroes</Crumb>
</Breadcrumb>

{#if !hero}
    <PigeonPeteSays>
        <p>An error occurred!</p>
    </PigeonPeteSays>
{:else}
    <HeroEditor heroObject={hero}></HeroEditor>
{/if}