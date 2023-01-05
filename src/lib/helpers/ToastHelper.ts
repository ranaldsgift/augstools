import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';

export class ToastHelper {
    public static create(message: string, preset?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'success' | 'error' = 'success') {
        var t: ToastSettings = {
            message: message,
            preset: preset,
            autohide: true,
            timeout: 1000
        };
        toastStore.trigger(t);

    }
}