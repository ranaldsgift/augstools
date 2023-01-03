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
    <Crumb href='/homebrew/create'>
        <span>Create</span>
    </Crumb>
    <Crumb>Heroes</Crumb>
</Breadcrumb>

{#if $page.data.session && $page.data.authUser?.userName}

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