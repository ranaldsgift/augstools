import { FormHelper } from "$lib/helpers/FormHelper";
import { HeroModel } from "$lib/interfaces/HeroModel";
import { plainToClass } from "class-transformer";
import type { Actions } from "./$types";

export const actions: Actions = {
    save: async (event) => {
        const data = await event.request.formData();

        const heroModel = plainToClass(HeroModel, FormHelper.serialize(data));

        try {
            await event.locals.heroesRepository.save(heroModel);
        }
        catch (error) {
            console.log('An error occured when saving the Hero data.');
            console.log(error);
        }

        return { success: true };
    }
  };