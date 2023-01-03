<script lang="ts">
    import HeroEditor from '$lib/components/HeroSheetEditor.svelte';
    import { page } from '$app/stores';
    import { HomebrewCategoriesEnum } from '$lib/enums/Enums';
    import { Breadcrumb, Crumb } from '@skeletonlabs/skeleton';
    import { StringHelper } from '$lib/helpers/StringHelper';
    import HeroSheet from '$lib/components/HeroSheet.svelte';
    import type { HeroModel } from '$lib/interfaces/HeroModel';
    import ComicButton from '$lib/components/ComicButton.svelte';

    const hero: HeroModel = $page.data.heroModel ? JSON.parse($page.data.heroModel) : undefined;
</script>

<style>
    .hero-page :global(.hero-sheet-container) {
        pointer-events: none;
    }
    .hero-page {
        max-width: 1500px;
		grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
    }
</style>

<svelte:head><title>Create Your Homebrew</title></svelte:head>

<Breadcrumb>
    <Crumb href='/'>
        <span>Home</span>
    </Crumb>
    <Crumb href='/homebrew'>
        <span>Homebrews</span>
    </Crumb>
    <Crumb href='/homebrew/heroes'>
        <span>Heroes</span>
    </Crumb>
    <Crumb>{hero.name}</Crumb>
</Breadcrumb>

<div class="hero-page grid justify-center gap-2">    
    {#if !hero}
        <p>There is no data available for this Homebrew.</p>
    {:else}
        <HeroSheet hero={hero}></HeroSheet>
        <div class="comic-form">
            <div class="flex gap-5 pb-5">                
                <div class="comic-label">
                    <h1>Author</h1>
                    <p><a href="/user/{hero.userId}">{hero.username}</a></p>
                </div>
                <div class="comic-label">
                    <h1>Date Created</h1>
                    <p>{new Date(hero.dateCreated).toLocaleDateString()}</p>
                </div>
                {#if hero.dateCreated != hero.dateModified}
                <div class="comic-label">
                    <h1>Date Updated</h1>
                    <p>{new Date(hero.dateModified).toLocaleDateString()}</p>
                </div>
                {/if}
            </div>
            {#if hero.description}
            <div class="flex gap-5 pb-5">   
                <div class="comic-label">
                    <h1>Hero Description</h1>
                    <p>{hero.description}</p>
                </div>
            </div>
            {/if}
    
            {#if $page.data.session && $page.data.session.user.id == hero.userId}
            <div class="flex justify-center">
                <a href={$page.url + "/edit"} class="unstyled">
                    <ComicButton icon="mdi:edit" text="Edit Your Build"></ComicButton>
                </a>
            </div>
            {/if}
        </div>
    {/if}
</div>