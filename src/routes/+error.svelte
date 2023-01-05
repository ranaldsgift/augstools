<script>
    import { page } from '$app/stores';
    import PigeonPeteSays from '$lib/components/PigeonPeteSays.svelte';
</script>
  

<PigeonPeteSays>
    <h1 class="text-warning-800 unstyled">{$page.status} - {$page.error?.message}</h1>
</PigeonPeteSays>