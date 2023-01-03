import { HomebrewCategoriesEnum } from '$lib/enums/Enums';
import { HomebrewFactory } from '$lib/factories/HomebrewFactory';
import type { HeroModel } from '$lib/interfaces/HeroModel';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {

  var authUser = locals.session?.user;

  if (!authUser) {
    console.log('Please login or create an account to create homebrews.');
    return;
  }
  var heroModel;
  
  try {
    heroModel = await locals.heroesRepository.findById(params.id); //HomebrewFactory.new<HeroModel>(authUser.id, HomebrewCategoriesEnum.Heroes);
  }
  catch (error) {
    console.log('Error loading hero data.');
    console.log(error);
  }

  return {
      heroModel: JSON.stringify(heroModel)
  };
}