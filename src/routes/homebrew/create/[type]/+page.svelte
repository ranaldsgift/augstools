<script lang="ts">
    import HeroEditor from '$lib/components/HeroSheetEditor.svelte';
    import { page } from '$app/stores';
    import { HomebrewCategoriesEnum } from '$lib/enums/Enums';
    import { Breadcrumb, Crumb } from '@skeletonlabs/skeleton';
    import { StringHelper } from '$lib/helpers/StringHelper';
</script>

<Breadcrumb>
    <Crumb href='/'>
        <span>Home</span>
    </Crumb>
    <Crumb href='/homebrew/create'>
        <span>Create</span>
    </Crumb>
    <Crumb>{StringHelper.fromCamelCase($page.params.type)}</Crumb>
</Breadcrumb>

{#if $page.data.session && $page.data.authUser?.userName}

    {#if !$page.data.homebrew}
        <p>There is no data available for this Homebrew.</p>
    {:else if $page.params.type == HomebrewCategoriesEnum.Heroes}
        <HeroEditor heroObject={$page.data.homebrew}></HeroEditor>
    {/if}

{:else}
    <p>Please login to create homebrew content.</p>
{/if}