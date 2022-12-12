<script lang="ts">
    import homebrewTypes from '$lib/data/homebrewTypeData.json'
    import NavList from '$lib/components/ComicNavList.svelte';

    let navItems: {name: string, url: string }[] = [];

    homebrewTypes.forEach(homebrewType => {
        navItems.push({
            name: homebrewType.name,
            url: `/homebrew/${homebrewType.name.toLowerCase()}/create`
        })
    });

</script>

<h1>What type of Homebrew would you like to create?</h1>
<NavList listItems={navItems}></NavList>