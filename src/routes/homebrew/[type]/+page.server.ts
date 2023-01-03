import type { PageServerLoad } from './$types';
import { HomebrewCategoriesEnum } from '$lib/enums/Enums';

export const load: PageServerLoad = async ({ locals, params }) => {    
  let homebrewsList;

  try {
  
      var homebrewCategory = params.type as HomebrewCategoriesEnum;
    
      switch(homebrewCategory) {
          case HomebrewCategoriesEnum.Heroes:
                var items = await locals.heroesRepository.getAll();
                homebrewsList = items;
            break;
      }
  }
  catch(error) {
      console.log('Error loading homebrew data.');
      console.log(error);
  }

  return {
    homebrewsList: JSON.stringify(homebrewsList)
  };
}