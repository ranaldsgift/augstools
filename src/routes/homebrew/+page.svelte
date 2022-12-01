<script lang="ts">
    import homebrewTypes from '$lib/data/homebrewTypeData.json'
    import NavList from '../../components/NavList.svelte';

    let navItems: {name: string, url: string }[] = [];

    homebrewTypes.forEach(homebrewType => {
        navItems.push({
            name: homebrewType.name,
            url: `/homebrew/${homebrewType.name.toLowerCase()}`
        })
    });
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

<NavList listItems={navItems}></NavList>