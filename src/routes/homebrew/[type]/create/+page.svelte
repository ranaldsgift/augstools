<script>
    import HeroEditor from '../../../../components/HeroEditor.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>Create your {data.homebrewType}</h1>

{#if data.homebrewType == 'heroes'}
    <HeroEditor></HeroEditor>
{/if}