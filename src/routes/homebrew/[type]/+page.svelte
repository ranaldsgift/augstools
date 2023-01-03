<script lang="ts">
    import { page } from '$app/stores'
    import { HomebrewCategoriesEnum } from '$lib/enums/Enums';
    import type { HomebrewModel } from '$lib/interfaces/HomebrewModel';
    import {
        // Utilities
        createDataTableStore,
        dataTableHandler,
        // Svelte Actions
        tableInteraction,
        tableA11y
    } from '@skeletonlabs/skeleton';

    const listItems: HomebrewModel[] = $page.data.homebrewsList ? JSON.parse($page.data.homebrewsList) : [];

    const dataTableStore = createDataTableStore(
        // Pass your source data here:
        listItems,
        // Provide optional settings:
        {
            // The current search term.
            search: '',
            // The current sort key.
            sort: '',
            // Paginator component settings.
            pagination: { offset: 0, limit: 10, size: 0, amounts: [1, 2, 5, 10] }
        }
    );

    // This automatically handles search, sort, etc when the model updates.
    dataTableStore.subscribe((model) => dataTableHandler(model));
</script>

<div class="max-w-5xl">
    <h1>View the community created {$page.data.homebrewType}</h1>
    
    {#if $page.data.homebrewsList && $page.data.homebrewsList.length > 0}
        {#if $page.data.homebrewType == HomebrewCategoriesEnum.Heroes}
        <h1>Heroes List</h1>Copy

        <div class="table-container">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>user</th>
                        <th>date c</th>
                        <th>date m</th>
                    </tr>
                </thead>
                <tbody>
                    {#each $dataTableStore.filtered as row, rowIndex}
                        <tr>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.username}</td>
                            <td>{row.dateCreated}</td>
                            <td>{row.dateModified}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
        {/if}
    {/if}
</div>