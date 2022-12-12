<script lang="ts">
    import homebrewTypes from '$lib/data/homebrewTypeData.json'
    import NavList from '$lib/components/ComicNavList.svelte';

    let navItems: {name: string, url: string }[] = [];

    homebrewTypes.forEach(homebrewType => {
        navItems.push({
            name: homebrewType.name,
            url: `/homebrew/${homebrewType.name.toLowerCase()}`
        })
    });
</script>

<NavList listItems={navItems}></NavList>