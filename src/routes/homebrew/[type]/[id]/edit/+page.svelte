<script lang="ts">
    import HeroEditor from '$lib/components/HeroSheetEditor.svelte';
    import { page } from '$app/stores';
    import { HomebrewCategoriesEnum } from '$lib/enums/Enums';
    import { Breadcrumb, Crumb } from '@skeletonlabs/skeleton';
</script>

{#if $page.data.session && $page.data.authUser?.userName}

    {#if !$page.data.homebrew}
        <p>There is no data available for this Homebrew.</p>
    {:else if $page.data.homebrewType == HomebrewCategoriesEnum.Heroes}
        <Breadcrumb>
            <Crumb href='/'>
                <span>Home</span>
            </Crumb>
            <Crumb href='/homebrew/create'>
                <span>Create</span>
            </Crumb>
            <Crumb>Hero Editor</Crumb>
        </Breadcrumb>
        <HeroEditor heroObject={$page.data.homebrew}></HeroEditor>
    {/if}

{:else}
    <p>Please login to create homebrew content.</p>
{/if}