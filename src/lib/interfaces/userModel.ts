export interface UserModel {
    id: string
    userName: string
    roleId: number | null
    avatar: string | null
    discord: string | null
    dateCreated: Date
    dateModified: Date
    isDeleted: boolean
}