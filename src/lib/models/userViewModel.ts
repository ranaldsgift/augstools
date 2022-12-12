import type { HomebrewModel } from "$lib/interfaces/homebrewModel";
import type { UserModel } from "$lib/interfaces/userModel";

export default class UserViewModel {
    
    constructor(user: UserModel){
        this.id = user.id;
        this.roleName = 'User'; // TODO Get Role name from DB using user.role_id
        this.userName = user.userName;
        this.avatar = user.avatar;
        this.discord = user.discord;
        this.dateCreated = user.dateCreated;
        this.dateModified = user.dateModified;
        this.isDeleted = user.isDeleted;

        //TODO get lists of homebrew data from db, created, saved, rated, 
    }

    id: string;
    roleName: string;
    userName: string | null;
    avatar: string | null;
    discord: string | null;
    dateCreated: Date;
    dateModified: Date;
    isDeleted: boolean;

    homebrewsCreated?: HomebrewModel[];
    homebrewsSaved?: HomebrewModel[];
    homebrewsRated?: HomebrewModel[];
}