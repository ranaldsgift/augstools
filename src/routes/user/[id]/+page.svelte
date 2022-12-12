<script lang="ts">
    import { page } from "$app/stores";
    import * as UserBusiness from '$lib/business/UserBusiness'
</script>

<div class="comic-card p-8 max-w-5xl">
    <h1>User page</h1>


    {#if !$page.data.user && $page.data.session?.user.id == $page.params.id}
        <p>Please create your user profile by clicking <a href='/user/edit'>here</a>.</p>
    {:else if !$page.data.user}
        <p>This user hasn't completed their user profile, or this user does not exist.</p>
    {:else if $page.data.user}
        <p>Id: {$page.data.user.id}</p>
        <p>Email: {$page.data.user.userName}</p>
    {/if}

    {#if $page.data.session?.user.id == $page.params.id}
        <button class="flex" on:click={async () => { await UserBusiness.signOut(); }}>
            <iconify-icon icon="mdi:logout"></iconify-icon><span>Log Out</span>
        </button>
        <button>user is logged in</button>
    {/if}
</div>