import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {    
    let heroList;

    try {
        heroList = await locals.heroesRepository.getAll();
    }
    catch(error) {
        console.log('Error loading homebrew data.');
        console.log(error);
    }

    return {
        heroList: JSON.stringify(heroList)
    };
}