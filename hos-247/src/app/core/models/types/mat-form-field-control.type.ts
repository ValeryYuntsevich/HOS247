import { ValidationErrors } from '@angular/forms';

export type TMatFormFieldControl = {
	label: string;
	hint: string;
	placeholder: string;
	propertyName: string;
	type: 'text' | 'number' | 'email' | 'password';
	appearance: 'legacy' | 'fill' | 'standard' | 'outline';
	validatorErrorMessage: ValidationErrors;
};
