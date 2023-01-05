import { HomebrewCategoriesEnum } from '$lib/enums/Enums';
import { HomebrewFactory } from '$lib/factories/HomebrewFactory';
import type { HeroModel } from '$lib/interfaces/HeroModel';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
  var heroModel;
  
  try {
    heroModel = await locals.heroesRepository.findById(params.id);
  }
  catch (error) {
    console.log('Error loading Hero data from database.');
    console.log(error);
  }
  
    return {
        heroModel: JSON.stringify(heroModel)
    };
}