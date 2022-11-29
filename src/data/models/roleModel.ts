import DataModel from "./interfaces/dataModel";

export default class RoleModel extends DataModel {
    constructor() {
        super();
        this.name = '';
        this.icon = '';
    }

    name: string;
    icon: string;
}