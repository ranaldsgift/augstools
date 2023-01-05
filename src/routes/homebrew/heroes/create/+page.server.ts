import { HomebrewCategoriesEnum } from '$lib/enums/Enums';
import { HomebrewFactory } from '$lib/factories/HomebrewFactory';
import type { HeroModel } from '$lib/interfaces/HeroModel';
import type { PageServerLoad } from './$types';
import { redirect, type Handle } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, params }) => {
    const heroModel = locals.session?.user ? HomebrewFactory.new<HeroModel>(locals.session.user.id, HomebrewCategoriesEnum.Heroes) : null;
  
    return {
        heroModel: JSON.stringify(heroModel)
    };
}