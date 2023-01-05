import '$lib/db';
import 'reflect-metadata';
import { RepositoryFactory } from '$lib/factories/RepositoryFactory';
import { HeroesRepository } from '$lib/repos/HeroesRepository';
import { UserRepository } from '$lib/repos/UserRepository';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({event, resolve}) => {
	const { session, supabaseClient } = await getSupabase(event);
	event.locals.session = session;

	RepositoryFactory.setSupabaseClient(supabaseClient);
	event.locals.userRepository = RepositoryFactory.get<UserRepository>(UserRepository.getType());
	event.locals.heroesRepository = RepositoryFactory.get<HeroesRepository>(HeroesRepository.getType());

	if (event.locals.session) {
		event.locals.authUser = await event.locals.userRepository.findById(event.locals.session.user.id);
	}

	if (event.url.pathname.endsWith('/edit') || event.url.pathname.endsWith('/create')) {
		if (!event.locals.session) {
			throw redirect(303, '/errors/auth');
		}
		if (!event.locals.authUser?.userName || event.locals.authUser.userName.length === 0) {
			if (!event.url.pathname.startsWith('/user/'))
				throw redirect(303, '/errors/profile');
		}
	}

	
	const response = await resolve(event);
	return response;
}