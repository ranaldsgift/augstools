<script>
    import Navigation from '../components/Navigation.svelte';
    import UserModel from '../data/models/userModel';
    import homepageData from '$lib/data/homepageData.json'

    let user = new UserModel();
    user.dateCreated = new Date();
    user.id = 1;
    let linkTarget = '';

    const setExternalLink = () => {
        linkTarget = '_blank';
    }
    const setInternalLink = () => {
        linkTarget = '';
    }
    
    import backgroundUrl from '../images/overlays/zoom.jpg'
    import ComicCard from '../components/ComicCard.svelte';
</script>

<div class="grid grid-cols-2 gap-5 max-w-5xl m-auto py-8 px-8">

    {#each homepageData as homepageItem}

        <a href="{homepageItem.url}" target="{homepageItem.linkTarget}" rel="noreferrer">

            <ComicCard title={homepageItem.title} icon={homepageItem.icon} description={homepageItem.description}></ComicCard>



<!--             <header class="card-header">
                <h1 class="font-bold text-lg pb-2 text-tertiary-600">{homepageItem.title}</h1>
            </header>
            <div class="card-body">
                <iconify-icon icon="{homepageItem.icon}"></iconify-icon>
            </div>
            <footer class="card-footer">
                <p class="text-gray-700">{homepageItem.description}</p>
            </footer> -->
        </a>
    {/each}

</div>