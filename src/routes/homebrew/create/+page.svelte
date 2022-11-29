<script>
    import homebrewTypes from '$lib/data/homebrewTypeData.json'
</script>

<h1>What type of Homebrew would you like to create?</h1>
<ul>
    {#each homebrewTypes as homebrewType}
    <li>
        <a href='/homebrew/{homebrewType.name}/create'>{homebrewType.name}</a>
    </li>
    {/each}
</ul>