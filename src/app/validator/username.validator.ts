import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validate(control: AbstractControl): {[key: string]: any} | null {
    const validationResult: boolean = /^[A-Za-z]*$/.test(control.value);
    return validationResult ? null : { username_error: { value: control.value }};
}

export function validateConfirmUsername(formGroup: AbstractControl): {[key: string]: any} | null {
    const testResult = formGroup.get('username').value !== formGroup.get('confirm_username').value;
    return testResult ? {confirm_username_error: {value: formGroup.value}} : null;
}
