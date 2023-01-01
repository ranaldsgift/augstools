export interface IEntityModel {
    id?: number | string
}

export abstract class BaseModel implements IEntityModel {
    id?: number | string

    public static getType(): string {
        return (this as any).name;
    }
}