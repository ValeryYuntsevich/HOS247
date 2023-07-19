import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class MatchFieldValidator {
	static validFieldMatch(
		controlName: string,
		confirmControlName: string,
	): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			const controlValue: unknown | null = control.get(controlName)?.value;
			const confirmControlValue: unknown | null =
				control.get(confirmControlName)?.value;

			if (!confirmControlValue) {
				control.get(confirmControlName)?.setErrors({
					required: true,
				});
			}

			if (controlValue !== confirmControlValue) {
				control.get(confirmControlName)?.setErrors({
					invalidPassword: true,
				});
			}

			if (controlValue && controlValue === confirmControlValue) {
				control.get(confirmControlName)?.setErrors(null);
			}

			return null;
		};
	}
}
