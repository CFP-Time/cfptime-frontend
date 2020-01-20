import { AbstractControl } from '@angular/forms';

const URL_REGEXP = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
const TWITTER_HANDLE_REGEXP = '\@[a-zA-Z0-9_-]+'

export function ValidateUrl(control: AbstractControl) {
    const regex = RegExp(URL_REGEXP);
    if (control.value != 'N/A' && !regex.test(control.value)) {
        return { invalidUrl: true };
    }
    return null;
}

export function ValidateTwitterHandle(control: AbstractControl) {
    const regex = RegExp(TWITTER_HANDLE_REGEXP);
    if (control.value != 'N/A' && !regex.test(control.value)) {
        return { invalidUrl: true };
    }
    return null;
}