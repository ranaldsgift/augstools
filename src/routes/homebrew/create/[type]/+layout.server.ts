import { HomebrewCategoriesEnum } from '$lib/enums/Enums';
import { HomebrewFactory } from '$lib/factories/HomebrewFactory';
import type { HeroModel } from '$lib/interfaces/HeroModel';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, params }) => {

    var authUser = locals.session?.user;
  
    if (!authUser) {
      console.log('Please login or create an account to create homebrews.');
      return;
    }
    
    var homebrewCategory = params.type as HomebrewCategoriesEnum;
  
    var homebrewObject = {};
  
    switch(homebrewCategory) {
        case HomebrewCategoriesEnum.Heroes:
            var heroModel = HomebrewFactory.new<HeroModel>(authUser.id, HomebrewCategoriesEnum.Heroes);
            var { ...hero } = heroModel;
            homebrewObject = hero;
            break;
    }
  
    return {
        homebrew: homebrewObject
    };
}