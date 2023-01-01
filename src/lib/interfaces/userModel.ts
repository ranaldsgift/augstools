import type { Database } from "src/schema"

export type UserEntity = Database["public"]["Tables"]["user_profiles"]["Row"];

export interface UserModel {
    id: string
    userName: string
    roleId: number // TODO replace with RoleModel
    avatar: string
    discord: string
    boardgamegeek: string
    dateCreated: Date
    dateModified: Date
    isDeleted: boolean
}