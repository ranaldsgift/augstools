import type { UserEntity, UserModel } from "$lib/interfaces/UserModel";
import type { User } from "@supabase/supabase-js";
import { Repository, type IRepository } from "./Repository";

export class UserRepository extends Repository<UserModel, UserEntity, UserEntity> {
    public getAll(options: { limit: number; match?: Record<string, unknown> | undefined; }): Promise<UserModel[]> {
        throw new Error("Method not implemented.");
    }

    public async findById(id: string | number): Promise<UserModel> {
        const { data, error } = await this.supabaseClient.from('user_profiles').select('*').eq('id', id).eq('is_deleted', false).order('id').limit(1).single();
        
        if (error || !data) {
            throw new Error(error.message);
        }

        return this.mapper.entityToModel(data);
    }

    public async save(formData: FormData): Promise<UserModel> {
        var entity = this.mapper.modelToEntity(this.mapper.objectToModel(Object.fromEntries(formData)));

        entity.date_modified = new Date().toISOString();
        
        const { data, error } = await this.supabaseClient.from("user_profiles").upsert(entity).select().order('id').limit(1).single();

        if (error) {
            console.log(error.message);
            throw new Error(`Unable to update item. ${error.message}`);
        }

        return this.mapper.entityToModel(data);

    }
    
    public delete(id: string | number): void {
        throw new Error("Method not implemented.");
    }

    public async getAuthUser(): Promise<User | null> {
        var { data } = await this.supabaseClient.auth.getUser();
        if (!data) {
            return null;
        }
        return data.user;
    }    
}