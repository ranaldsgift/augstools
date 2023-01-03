<script lang="ts">
    import NavList from '$lib/components/ComicNavList.svelte';
    import { EnumHelper } from '$lib/helpers/EnumHelper';
    import { HomebrewCategoriesEnum } from '$lib/enums/Enums';
    import { StringHelper } from '$lib/helpers/StringHelper';
    import { Breadcrumb, Crumb } from '@skeletonlabs/skeleton';

    let navItems: {name: string, url: string }[] = [];

    const categories = EnumHelper.getKeys(HomebrewCategoriesEnum);

    categories.forEach(category => {
        navItems.push({
            name: StringHelper.toTitleCase(category),
            url: `/homebrew/${category.toLowerCase()}`
        })
    });
</script>

<Breadcrumb>
	<Crumb href='/'>
		<span>Home</span>
	</Crumb>
	<Crumb>
		<span>Homebrews</span>
	</Crumb>
</Breadcrumb>

<NavList listItems={navItems}></NavList>