import { ValidatorFn, AbstractControl } from '@angular/forms';

export function validatePassword(test: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const testResult = test.test(control.value);
        return testResult ? null : { password_error: { value: control.value } };
    };
}

export function validateConfirmPassword(formGroup: AbstractControl): {[key: string]: any} | null {
    const testResult = formGroup.get('password') && formGroup.get('confirm_password') && formGroup.get('password').value !== formGroup.get('confirm_password').value;
    return testResult ? { confirm_password_error: {value: formGroup.value} } : null;
}
