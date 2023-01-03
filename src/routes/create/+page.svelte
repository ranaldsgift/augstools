<script lang="ts">
    import { page } from '$app/stores';
    import NavList from '$lib/components/ComicNavList.svelte';
    import { Breadcrumb, Crumb } from '@skeletonlabs/skeleton';
    import { EnumHelper } from '$lib/helpers/EnumHelper';
    import { HomebrewCategoriesEnum } from '$lib/enums/Enums';
    import { StringHelper } from '$lib/helpers/StringHelper';
    import PigeonPeteSays from '$lib/components/PigeonPeteSays.svelte';

    let navItems: {name: string, url: string }[] = [];

    const categories = EnumHelper.getKeys(HomebrewCategoriesEnum);

    categories.forEach(category => {
        navItems.push({
            name: StringHelper.toTitleCase(category),
            url: `/homebrew/${category.toLowerCase()}/create`
        })
    });
</script>

<svelte:head><title> Create Your Homebrew</title></svelte:head>

<Breadcrumb>
	<Crumb href='/'>
		<span>Home</span>
	</Crumb>
	<Crumb>
		<span>Create</span>
	</Crumb>
</Breadcrumb>

{#if $page.data.session && $page.data.authUser?.userName}
<NavList listItems={navItems}></NavList>
{:else if $page.data.session}
<p>Please <a href="/user/{$page.data.session.user.id}/edit">edit your profile</a> before creating homebrew content.</p>
{:else}
<div class="flex justify-center">
    <PigeonPeteSays>
        <p>Please login to create homebrew content.</p>
    </PigeonPeteSays>
</div>
{/if}