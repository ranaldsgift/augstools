/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        homebrewType: params.type,
        listItems: []
    }; 
}