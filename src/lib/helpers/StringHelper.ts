export class StringHelper {
    public static toTitleCase(text: string) {
        return text.replace(/([a-z])([A-Z])/g, '$1 $2');
    }
}