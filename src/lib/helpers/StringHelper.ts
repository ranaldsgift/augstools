export class StringHelper {
    public static fromCamelCase(text: string) {
        return text.replace(/([a-z])([A-Z])/g, '$1 $2');
    }
}