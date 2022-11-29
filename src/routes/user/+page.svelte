<script lang="ts">
    import {page} from "$app/stores";
</script>

<h1>User page</h1>
{#if $page.data.session}
<p>Id: {$page.data.session.user.id}</p>
<p>Email: {$page.data.session.user.email}</p>
{/if}