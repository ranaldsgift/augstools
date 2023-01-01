import type { LayoutServerLoad } from '../$types';
import { HomebrewCategoriesEnum } from '$lib/enums/Enums';

export const load: LayoutServerLoad = async ({ locals, params }) => {
  var authUser = locals.session?.user;

  if (!authUser) {
    console.log('Please login or create an account to create homebrews.');
    return;
  }
    
  var homebrewObject = {};

  try {
  
      var homebrewCategory = params.type as HomebrewCategoriesEnum;
    
      switch(homebrewCategory) {
          case HomebrewCategoriesEnum.Heroes:
                var heroModel = await locals.heroesRepository.findById(parseInt(params.id));
                var { ...hero } = heroModel;
                homebrewObject = hero;
            break;
      }
  }
  catch(error) {
      console.log('Error loading homebrew data.');
      console.log(error);
  }

  return {
    homebrew: homebrewObject
  };
}