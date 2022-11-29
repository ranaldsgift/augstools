export default class DataModel {
    
    constructor(){
        let currentDate = new Date();
        this.id = 0;
        this.dateCreated = currentDate;
        this.dateModified = currentDate;
        this.isDeleted = false;
    }

    id: number;
    dateCreated: Date;
    dateModified: Date;
    isDeleted: boolean;
}