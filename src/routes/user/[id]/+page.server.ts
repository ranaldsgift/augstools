import type { PageServerLoad } from './$types';
import * as UserBusiness from "$lib/business/UserBusiness";

export const load: PageServerLoad = async ({ params }) => {
  return {
    user: await UserBusiness.getUser(params.id)
  };
}