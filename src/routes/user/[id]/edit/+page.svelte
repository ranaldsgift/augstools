<script lang="ts">
    import { page } from '$app/stores'
    import { enhance } from '$app/forms'
    import ComicButton from '$lib/components/ComicButton.svelte';

    const userModel = $page.data.userModel;
</script>

{#if userModel && userModel.id == $page.data.session?.user.id}
<form method="POST" use:enhance class="comic-form max-w-2xl m-auto grid gap-4" >
    <div>
        <header>
            <h1>Edit your User Profile</h1>
        </header>
        <div class="px-8 py-4 grid gap-4">
            <input name="id" type="hidden" value="{userModel.id}">
            <input name="dateCreated" type="hidden" value="{userModel.dateCreated}">
            <input name="roleId" type="hidden" value="{userModel.roleId}">
            <label>
                User Name
                <input type="text" name="userName" value="{userModel.userName ?? ''}" placeholder="Enter your user name">
            </label>
            <label>
                <div class="flex gap-1">
                    <iconify-icon icon="carbon:user-avatar-filled"></iconify-icon>
                    Avatar Image URL
                </div>
                <input type="text" name="avatar" value="{userModel.avatar ?? ''}" placeholder="Enter an image URL for your avatar">
                
            </label>
            <label>
                <div class="flex gap-1">
                    <iconify-icon icon="ic:baseline-discord"></iconify-icon>
                    Discord
                </div>
                <input type="text" name="discord" value="{userModel.discord ?? ''}" placeholder="Enter your Discord user name">
            </label>
            <label>
                <div class="flex gap-1">
                    <iconify-icon icon="game-icons:meeple"></iconify-icon>
                    BoardGameGeek
                </div>
                <input type="text" name="boardgamegeek" value="{userModel.boardgamegeek ?? ''}" placeholder="Enter your BGG user name">
            </label>
        </div>
    </div>
    <div class="flex justify-center">
        <ComicButton text="Save Profile" icon="material-symbols:save"></ComicButton>
    </div>
</form>
{/if}