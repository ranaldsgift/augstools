import type { LayoutServerLoad } from './$types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export const load: LayoutServerLoad = async (event) => {
  const session = await getServerSession(event);
  
  var authUser;
    if (session) {
        try {
            authUser = await event.locals.userRepository.findById(session.user.id);
        }
        catch (error) {
            console.log('An error occured when loading user data from database.');
            console.log(error);
        }
    }
  
  return {
      session: session,
      authUser: authUser
  };
};