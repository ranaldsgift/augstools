import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
    if (!locals.authUser) {
        throw redirect(303, '/errors/auth');
    }
  
    return {
        authUser: locals.authUser
    };
}