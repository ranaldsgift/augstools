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

<NavList listItems={navItems}></NavList>