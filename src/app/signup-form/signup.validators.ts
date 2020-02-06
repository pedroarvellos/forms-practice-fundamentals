import { AbstractControl, ValidationErrors } from '@angular/forms';

export class SignupValidators {
    static usernameCannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0) return { usernameCannotContainSpace: true };

        return null;
    }

    static usernameCannotContainCapitals(control: AbstractControl) : ValidationErrors | null {
        if(/[A-Z]/.test((control.value as string))) return { usernameCannotContainCapitals: true };

        return null;
    }

    static usernameShouldBeUnique(control: AbstractControl) : Promise<ValidationErrors> | null {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'john') resolve({ usernameShouldBeUnique: true })
                else resolve(null)
            }, 1000)
        })
    }

    static passwordCannotBeSimple(control: AbstractControl) : ValidationErrors | null {
        const hasCapitalLetter = (/[A-Z]/.test(control.value as string));
        const hasNumber = (/[0-9]/.test(control.value as string));
        const hasLowerCase = (/[a-z]/.test(control.value as string));

        if(!(hasCapitalLetter && hasNumber && hasLowerCase)) return { passwordCannotBeSimple: true };

        return null;
    }
}