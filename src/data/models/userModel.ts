import DataModel from "./interfaces/dataModel";

export default class UserModel extends DataModel {
    constructor() {
        super();
        this.username = '';
        this.role = 0;
        this.email = '';
        this.avatar = '';
    }

    username: string;
    role: number;
    email: string;
    avatar: string;
}