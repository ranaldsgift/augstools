import '$lib/db';
import { RepositoryFactory } from '$lib/factories/RepositoryFactory';
import { HeroesRepository } from '$lib/repos/HeroesRepository';
import { UserRepository } from '$lib/repos/UserRepository';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({event, resolve}) => {
	const { session, supabaseClient } = await getSupabase(event);
	event.locals.session = session;

	RepositoryFactory.setSupabaseClient(supabaseClient);
	event.locals.userRepository = RepositoryFactory.get<UserRepository>(UserRepository.getType());
	event.locals.heroesRepository = RepositoryFactory.get<HeroesRepository>(HeroesRepository.getType());;
	
	const response = await resolve(event);
	return response;
}