<script lang="ts">
    export let title = '';
    export let description = '';
    export let icon = '';
    export let body = '';
    export let useBackground = true;
    export let shadowColor = '#ffeb3bd9';
</script>

<style>
    .comic-background {
        background-image: url('/images/overlays/zoom.jpg');
    }
    .comic-card {
        border-color: black;
        border-width: 3px;
        transform: skew(-1deg);
        position: relative;
        overflow: hidden;
        background-size: cover;
        display: grid;
    }
    .comic-text {
        font-family: "Comic Sans MS";
    }

    .comic-card .card-header {
        border: 3px solid black;
        position: absolute;
        top: -3px;
        left: -10px;
        transform: skew(-15deg);
        padding-left: 20px;
        padding-top: 10px;
        letter-spacing: 0.15rem;
    }

    .comic-card .card-footer {
        border: 3px solid black;
        position: relative;
        bottom: -3px;
        left: 110px;
        transform: skew(-15deg);
        max-width: 80%;
        padding-right: 40px;
        padding-top: 10px;
        background: #fff;
        display: grid;
        align-content: center;
    }
    .comic-card .card-body {
        justify-content: center;
        align-content: center;
        display: grid;
        padding: 0;
    }
    .comic-card {
        box-shadow: inset var(--shadow-color) 1px 1px 100px 100px;
    }
    .comic-background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: bottom;
        opacity: 0.25;
    }
    .card-footer p, .card-header h1 {
        transform: skew(15deg);
    }
    .card-body iconify-icon {
        font-size: 6rem;
        padding: 1.5rem 0;
    }
</style>

<div class="card comic-card comic-text" style:--shadow-color="{shadowColor}">
    {#if useBackground}
    <div class="comic-background"></div>
    {/if}
    {#if title.length > 0}
    <header class="card-header bg-tertiary-600">
        <h1 class="font-bold text-2xl pb-2">{title}</h1>
    </header>
    {/if}
    <div class="card-body">
        {#if icon.length > 0}
        <iconify-icon icon="{icon}"></iconify-icon>
        {/if}
        <p class="text-gray-700">{body}</p>
    </div>
    {#if description.length > 0}
    <footer class="card-footer">
        <p class="text-gray-700">{description}</p>
    </footer>
    {/if}
</div>