import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

// https://stackblitz.com/github/Karvel/angular-password-strength?file=src%2Fapp%2Finfrastructure%2Futils%2Fvalidators%2Fpassword-validator.ts,src%2Fapp%2Ffeatures%2Fauth%2Fregister%2Fregister.component.ts,src%2Fapp%2Finfrastructure%2Futils%2Futils.ts

export class PasswordValidator {
	static validPassword(isRequired: boolean = false): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			if (!control.value) {
				return isRequired ? { required: true } : null;
			}
			if (control.value.length < 8) {
				return { invalidPassword: true };
			}
			// if (!CONSTANTS.SYMBOL_REGEX.test(control.value)) {
			//   return {
			//     invalidPassword: `Password requires at least one special character.`,
			//   };
			// }
			// if (!CONSTANTS.DIGIT_REGEX.test(control.value)) {
			//   return {
			//     invalidPassword: `Password requires at least one numeric character.`,
			//   };
			// }

			return null;
		};
	}
}
