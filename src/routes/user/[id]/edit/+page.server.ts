import { FormHelper } from "$lib/helpers/FormHelper";
import { UserModel } from "$lib/interfaces/UserModel";
import { plainToClass } from "class-transformer";
import type { Actions } from "./$types";

export const actions: Actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const userModel = plainToClass(UserModel, FormHelper.serialize(data));
        try {
            await event.locals.userRepository.save(userModel);
        }
        catch (error) {
            console.log('Error saving user data to database');
            console.log(error);
        }
        
        return;
    }
  };