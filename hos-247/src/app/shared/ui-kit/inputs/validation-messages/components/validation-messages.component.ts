import { Component, Input } from '@angular/core';
import { UntypedFormControl, ValidationErrors } from '@angular/forms';

@Component({
	selector: 'app-validation-messages',
	templateUrl: './validation-messages.component.html',
})
export class ValidationMessagesComponent {
	@Input() public validatorErrorMessage: ValidationErrors = {};
	@Input() public control: UntypedFormControl = new UntypedFormControl('');

	get errorMessage(): string | null {
		for (const propertyName in this.control.errors) {
			if (
				this.control.errors.hasOwnProperty(propertyName) &&
				this.control.touched
			) {
				return this.validatorErrorMessage[propertyName];
			}
		}
		return null;
	}
}
