import { AugsLicensesEnum, type HomebrewCategoriesEnum } from "$lib/enums/Enums";
import type { Database } from "src/schema";
import { BaseModel } from "./BaseModel";

export type HomebrewEntity = Database["public"]["Tables"]["homebrews"]["Row"];

export class HomebrewModel extends BaseModel {
    constructor(userId: string, category: HomebrewCategoriesEnum) {
        super();
        this.userId = userId;
        this.augsLicense = AugsLicensesEnum.Homebrew;
        this.homebrewCategory = category;
        var currDate = new Date();
        this.dateCreated = currDate;
        this.dateModified = currDate;
        this.isDeleted = false;
    }

    userId: string
    name?: string
    description?: string
    originalImage?: string
    augsLicense: AugsLicensesEnum
    homebrewCategory: HomebrewCategoriesEnum
    dateCreated: Date
    dateModified: Date
    isDeleted: boolean
}