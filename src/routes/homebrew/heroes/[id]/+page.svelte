<script lang="ts">
    import { page } from '$app/stores';
    import { Breadcrumb, Crumb } from '@skeletonlabs/skeleton';
    import HeroSheet from '$lib/components/HeroSheet.svelte';
    import type { HeroModel } from '$lib/interfaces/HeroModel';
    import ComicButton from '$lib/components/ComicButton.svelte';
    import { onMount } from 'svelte';
    import * as htmlToImage from 'html-to-image';

    const hero: HeroModel = $page.data.heroModel ? JSON.parse($page.data.heroModel) : undefined;

    let heroSheet: HTMLElement;
    let heroSheetImage: HTMLElement;

    onMount(() => {
        var heroSheetContainer = heroSheet.querySelector('.hero-sheet-container') as HTMLElement;

        htmlToImage.toCanvas(heroSheetContainer, { style: { borderRadius: "0px" } })
        .then(function (canvas) {
            heroSheetImage.appendChild(canvas); 
            heroSheetImage.style.display = 'block';
            heroSheet.remove();
        });
    });
</script>

<style>
    .comic-form {
        min-width: 300px;
    }
    .hero-page :global(.hero-sheet-container) {
        pointer-events: none;
    }
    .hero-page {
        max-width: 1500px;
    }
</style>

<svelte:head><title>Create Your Homebrew</title></svelte:head>

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
    <Crumb>{hero.name}</Crumb>
</Breadcrumb>

<div class="hero-page flex justify-center gap-5 flex-wrap">    
    {#if !hero}
        <p>There is no data available for this Homebrew.</p>
    {:else}
        <div bind:this={heroSheet}>
            <HeroSheet hero={hero}></HeroSheet>
        </div>
        <div style:box-shadow="black 0 0 3px 1px" style:border-radius="5px" style:display="none" bind:this={heroSheetImage}></div>
        <div class="comic-form grow">
            <div class="flex grow gap-5 pb-5">                
                <div class="comic-label">
                    <h1>Designer</h1>
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