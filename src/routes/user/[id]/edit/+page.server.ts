import type { Actions } from "./$types";

export const actions: Actions = {
    default: async (event) => {
        const data = await event.request.formData();
        try {
            event.locals.userRepository.save(data);
        }
        catch (error) {
            console.log('Error saving user data to database');
            console.log(error);
        }
        
        return;
    }
  };