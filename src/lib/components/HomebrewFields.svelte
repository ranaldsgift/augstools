<script lang="ts">
    import type { HomebrewModel } from "$lib/interfaces/HomebrewModel";

    export let homebrew: HomebrewModel;
</script>

<input type="hidden" name="augsLicense" bind:value={homebrew.augsLicense}>
<input type="hidden" name="dateCreated" bind:value={homebrew.dateCreated}>
<input type="hidden" name="dateModified" bind:value={homebrew.dateModified}>
<input type="hidden" name="homebrewCategory" bind:value={homebrew.homebrewCategory}>
<input type="hidden" name="id" bind:value={homebrew.id}>
<input type="hidden" name="userId" bind:value={homebrew.userId}>