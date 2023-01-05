export class StringHelper {
    public static toTitleCase(text: string) {
        return text.replace(/([a-z])([A-Z])/g, '$1 $2');
    }
    public static getNumberFromPixels(pixelCount: string) {
        return parseInt(pixelCount.replace('px',''));
    }
}