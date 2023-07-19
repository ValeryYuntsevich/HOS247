import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const EMAIL_REGEX = new RegExp(
	/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
);

export class EmailValidator {
	static validEmail(): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			if (!EMAIL_REGEX.test(control.value)) {
				return {
					invalidEmail: true,
				};
			}
			return null;
		};
	}
}
