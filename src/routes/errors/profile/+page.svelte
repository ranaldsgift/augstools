<script lang="ts">
    import PigeonPeteSays from "$lib/components/PigeonPeteSays.svelte";
    import { drawerStore } from "@skeletonlabs/skeleton";
    import { page } from '$app/stores';

drawerStore
</script>

<div class="flex justify-center">
<PigeonPeteSays>
    <h1 class="text-warning-800 text-2xl unstyled">For Pete's Sake!</h1>
    <p>Please <a href={`/user/${$page.data.authUser?.id}/edit`}>create</a> your User Profile. You need a valid username to create homebrew content!</p>
</PigeonPeteSays>
</div>