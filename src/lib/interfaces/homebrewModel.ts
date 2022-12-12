import type { Database } from "src/schema"

export interface HomebrewModel {
    id: number
    userId: string
    name: string
    description: string | null
    originalImage: string | null
    augsLicense: Database["public"]["Enums"]["augs_licenses"]
    homebrewCategory: Database["public"]["Enums"]["homebrew_categories"]
    dateCreated: string
    dateModified: string
    isDeleted: boolean
}