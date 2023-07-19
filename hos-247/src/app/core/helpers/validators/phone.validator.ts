import { UntypedFormControl, ValidationErrors } from '@angular/forms';

export const mobileRegExp = new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);

export function mobileValidator(
	control: UntypedFormControl,
): ValidationErrors | null {
	if (control.value.match(mobileRegExp)) {
		return null;
	} else {
		return { invalidMobile: true };
	}
}
