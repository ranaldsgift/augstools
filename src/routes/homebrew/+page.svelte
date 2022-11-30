<script lang="ts">
    import homebrewTypes from '$lib/data/homebrewTypeData.json'
    import ComicCard from '../../components/ComicCard.svelte';
    import { writable, type Writable } from 'svelte/store';

    let backgroundUrl = 'https://i.imgur.com/M5Mt5jU.jpg';
</script>

<style>
    a.btn::before {
        background-image: url('https://i.imgur.com/M5Mt5jU.jpg');
            content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: 121%;
        background-repeat: no-repeat;
        box-shadow: rgb(129 140 248 / 86%) 1px 1px 1px 38px inset;
        background-position: -13px -123px;
    }
    a.btn::after {
        position: absolute;
        content: attr(data-title);
        display: grid;
        align-content: center;
        left: 2rem;
        color: #fff;
        transform: skew(15deg);
    }
    a.btn:nth-child(2n+2)::after {
        justify-content: end;
        right: 2rem;
    }
    a.btn:nth-child(2n+2) {
        transform: perspective(100px) rotatey(-1deg);
    }
    a.btn {
        position: relative;
        transform: perspective(100px) rotatey(1deg);
    }
</style>

<div class="m-auto">
    <nav class="grid m-auto gap-4 px-8 max-w-3xl comic-list-nav">
        {#each homebrewTypes as homebrewType}
        <a href="/homebrew/{homebrewType.name.toLowerCase()}/" class="grid btn" data-title={homebrewType.name}>
            {homebrewType.name}
        </a>
        {/each}
    </nav>
</div>