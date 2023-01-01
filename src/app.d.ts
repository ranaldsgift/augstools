// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// and what to do when importing types
declare namespace App {
	interface Supabase {
	  Database: import('./schema').Database
	  SchemaName: 'public'
	}
	interface Locals {
		respositoryFactory: import('$lib/factories/RespositoryFactory').RespositoryFactory
		userRepository: import('$lib/repos/UserRepository').UserRepository
		homebrewsRepository: import('$lib/repos/HomebrewsRepository').HomebrewsRepository
		heroesRepository: import('$lib/repos/HeroesRepository').HeroesRepository
    	session: import('@supabase/supabase-js').Session | null
	}
	interface PageData {
    	session: import('@supabase/supabase-js').Session | null
		userModel?: import('$lib/interfaces/UserModel').UserModel
		authUser?: import('$lib/interfaces/UserModel').UserModel
	}
	// interface Error {}
	// interface Platform {}
}
