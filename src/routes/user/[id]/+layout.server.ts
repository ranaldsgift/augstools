import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, params }) => {
    let userModel;
    try {
        userModel = await locals.userRepository.findById(params.id);
    }
    catch (error) {
        console.log(`Unable to find User Account with ID ${params.id}`);
    }

    return {
        userModel
    };
}