import { supabaseClient } from "$lib/db";
import type { UserModel } from "$lib/interfaces/userModel";

export let userModel: UserModel;

export async function signIn(email: string) {
    try {
        const { error } = await supabaseClient.auth.signInWithOtp({ email });
        if (error) throw error
        return { error: null };
    } catch (error) {
        return { error: error };
    }
}

export async function signOut() {
    try {
        const { error } = await supabaseClient.auth.signOut();
        if (error) throw error
        return { error: null };
    } catch (error) {
        return { error: error };
    }
}

/* export async function createUser(userModel: User) {
    try {
        const { error } = await supabaseClient.from('user_profiles').insert({ 
            id: userModel.id, 
            user_name: userModel.user_name,
            avatar: userModel.avatar,
            discord: userModel.discord,
            date_modified: ((new Date()).toISOString())
        });
        if (error) throw error
        return { error: null };
    } catch (error) {
        return { error: error };
    }
} */

export async function updateUser(userModel: UserModel) {
    try {
        const { error } = await supabaseClient.from('user_profiles').upsert({ 
            id: userModel.id, 
            user_name: userModel.user_name,
            avatar: userModel.avatar,
            discord: userModel.discord,
            date_modified: ((new Date()).toISOString())
        });
        if (error) throw error
        return { error: null };
    } catch (error) {
        return { error: error };
    }
}

/* export async function createUser(userModel: User) {
    try {
        const { data, error } = await supabaseClient.auth.updateUser({
            data: { 
                user_name: userModel.user_name,
                avatar: userModel.avatar,
                discord: userModel.discord,
                role_id: userModel.role_id
            }
        });
        if (error) throw error
        return { error: null };
    } catch (error) {
        return { error: error };
    }
}

export async function deleteUser(id: string) {} */

export async function getUser(id: string) {

    const { data, error } = await supabaseClient.from('user_profiles').select('*').eq('id', id).limit(1).single();
    return data;


    //const { data: { user } } = await supabaseClient.auth.getUser(id);
    console.log(!data ? 'no data' : 'data returned');
}