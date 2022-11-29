import type { LayoutServerLoad } from './$types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { inject } from '@vercel/analytics';

export const load: LayoutServerLoad = async (event) => {
  return {
    session: await getServerSession(event)
  };
};

inject();