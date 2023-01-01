<script lang="ts">
    import type { HomebrewModel } from "$lib/interfaces/HomebrewModel";

    export let homebrew: HomebrewModel;
</script>

<input type="hidden" name="augs_license" bind:value={homebrew.augsLicense}>
<input type="hidden" name="date_created" bind:value={homebrew.dateCreated}>
<input type="hidden" name="date_modified" bind:value={homebrew.dateModified}>
<input type="hidden" name="homebrew_category" bind:value={homebrew.homebrewCategory}>
<input type="hidden" name="id" bind:value={homebrew.id}>
<input type="hidden" name="user_id" bind:value={homebrew.userId}>