import type { Actions } from "./$types";

export const actions: Actions = {
    save: async (event) => {
        const data = await event.request.formData();

        try {
            event.locals.heroesRepository.save(data);
        }
        catch (error) {
            console.log('An error occured when saving the Hero data.');
            console.log(error);
        }
    }
  };