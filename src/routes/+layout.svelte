<script lang="ts">
    import '../theme.postcss';
    import '@brainandbones/skeleton/styles/all.css';
    import '../app.postcss';
    import "../app.css";
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'

    import { supabaseClient } from '$lib/db'
    import {page} from '$app/stores';

    import { AppShell, AppBar, Divider } from '@brainandbones/skeleton';
    import { menu } from '@brainandbones/skeleton';
    import { Drawer } from '@brainandbones/skeleton';

    import { writable, type Writable } from 'svelte/store';
    const storeDrawer: Writable<boolean> = writable(false);

    let email = '';

onMount(() => {
  const {
    data: { subscription },
  } = supabaseClient.auth.onAuthStateChange(() => {
    invalidate('supabase:auth')
  })

  return () => {
    subscription.unsubscribe()
  }
})

    const handleLogin = async () => {
        try {
            const {error} = await supabaseClient.auth.signInWithOtp({ email });
            if (error) throw error
            alert('Check your email for a magic link to login!');
            drawerClose();
        } catch (error) {
            console.log(error);

        }
    }

    const handleLogout = async () => {
        await supabaseClient.auth.signOut();
        window.location.reload();
    }

    const drawerOpen: any = () => { storeDrawer.set(true) };
    const drawerClose: any = () => { storeDrawer.set(false) };
</script>

<Drawer open={storeDrawer} position="left">    
    <form on:submit|preventDefault={handleLogin} class="grid grid-flow-row m-auto max-w-xl gap-5 mt-10">
        <p class="text-center italic">Enter your e-mail to sign in with a Magic Link.</p><p class="text-center italic">You will be sent a link to authenticate yourself.</p>
        <input type="email" bind:value={email} label="E-mail">
        <button class="btn bg-primary-500 btn-base text-white" type="submit">Sign In</button>
    </form>
</Drawer>

<!-- <TopNavigation></TopNavigation> -->
<AppShell>
    <!-- Header -->
    <svelte:fragment slot="header">
        <AppBar background="bg-surface-600">
            <svelte:fragment slot="lead">
                <button use:menu={{ menu: 'navmenu', fixed: true }} class="btn-icon">
                    <iconify-icon icon="mdi:menu"></iconify-icon>
                </button>
                <nav class="menu-tl card p-4 w-48 shadow-xl top-16 left-2 list-nav text-black" data-menu="navmenu">
                    <ul>
                        <li><a href="/homebrew">Homebrew</a></li>
                        <li><a href="/coop">Co-Op Tool</a></li>
                        <li><a href="/db">AUGS Database</a></li>
                        <Divider></Divider>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/support">Support</a></li>
                    </ul>
                </nav>
                <a href="/" class="text-xl text-white">AUGSTOOLS</a>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <a class="btn-icon" href="https://github.com/ranaldsgift/augstools" target="_blank" rel="noreferrer">
                    <iconify-icon icon="mdi:github"></iconify-icon>
                </a>
                {#if $page.data.session}
                    <a href="/user" class="material-icons">                    
                        <iconify-icon icon="mdi:user"></iconify-icon>
                    </a>
                    <button class="btn-icon" on:click={handleLogout} >
                        <iconify-icon icon="mdi:logout"></iconify-icon>
                    </button>
                {:else}
                <button class="btn-icon" on:click={drawerOpen}>
                    <iconify-icon icon="mdi:user"></iconify-icon>
                </button>
                {/if}
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <!-- Sidebar -->
    <!-- Page Content Slot -->
    <slot />
</AppShell>
<!-- <div class="max-w-screen-xl m-auto my-4">
    <slot />
</div> -->