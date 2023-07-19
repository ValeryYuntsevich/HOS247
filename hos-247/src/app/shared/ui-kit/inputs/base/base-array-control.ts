import * as core from '@angular/core';
import * as forms from '@angular/forms';

import { Subscription } from 'rxjs';
import { filter, map, pairwise } from 'rxjs/operators';
// https://www.redlink.at/en/controlvalueaccessor-for-an-array-plus-validator/
@core.Directive()
export abstract class BaseArrayControl implements forms.ControlValueAccessor {
	public valueControl: forms.UntypedFormControl;

	discloseChange = (_: any) => {}; // Called on a value change
	discloseTouched = () => {}; // Called if you care if the form was touched
	discloseValidatorChange = () => {}; // Called on a validator change or re-validation;

	public constructor(
		private readonly ngControl: forms.NgControl,
		private readonly controlContainer: forms.FormGroupDirective,
	) {
		if (this.ngControl) {
			this.ngControl.valueAccessor = this;
		}
	}

	registerOnChange(fn: any): void {
		this.discloseChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.discloseTouched = fn;
	}

	writeValue(obj: any[]): void {
		// this.value = obj;
	}

	// validate(control: forms.AbstractControl): forms.ValidationErrors | null {
	// 	let valid = true;

	// 	if (!!this.yourArray && this.yourArray.length > 0) {
	// 		this.yourArray.forEach(yourEntry => (valid = valid && !!yourEntry));
	// 	}

	// 	return valid ? null : { invalid: true };
	// }

	registerOnValidatorChange?(fn: () => void): void {
		this.discloseValidatorChange = fn;
	}
}
