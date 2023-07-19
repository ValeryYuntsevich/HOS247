import * as core from '@angular/core';
import * as forms from '@angular/forms';

import { TMatFormFieldControl } from '@core/models';
import { BaseInputControl } from '../../base/base-input-control';

const CHECKBOX_CONTROL_VALUE_ACCESSOR: core.Provider = {
	provide: forms.NG_VALUE_ACCESSOR,
	useExisting: core.forwardRef(() => InputCheckboxControlComponent),
	multi: true,
};
// extends BaseControl
@core.Component({
	selector: 'app-input-checkbox-control',
	templateUrl: './input-checkbox-control.component.html',
	viewProviders: [CHECKBOX_CONTROL_VALUE_ACCESSOR],
})
export class InputCheckboxControlComponent {
	@core.Input() public control: forms.FormArray;
	// https://dev.to/jcamilom/building-a-reusable-multicheck-field-in-angular-498h
	// https://sreyaj.dev/custom-form-controls-controlvalueaccessor-in-angular
	// public constructor(
	// 	@core.Optional() @core.Self() ngControl: forms.NgControl,
	// 	@core.Optional() controlContainer: forms.FormGroupDirective,
	// ) {
	// 	super(ngControl, controlContainer);
	// }
}
// For example, an array of choices
// public checks: Array<ChoiceClass> = [
//   {description: 'descr1', value: 'value1'},
//   {description: "descr2", value: 'value2'},
//   {description: "descr3", value: 'value3'}
// ];

// initModelForm(): FormGroup{
//   return this._fb.group({
//     otherControls: [''],
//     // The formArray, empty
//     myChoices: new FormArray([]),
//   }
// }

// onCheckChange(event) {
//   const formArray: FormArray = this.myForm.get('myChoices') as FormArray;

//   /* Selected */
//   if(event.target.checked){
//     // Add a new control in the arrayForm
//     formArray.push(new FormControl(event.target.value));
//   }
//   /* unselected */
//   else{
//     // find the unselected element
//     let i: number = 0;

//     formArray.controls.forEach((ctrl: FormControl) => {
//       if(ctrl.value == event.target.value) {
//         // Remove the unselected element from the arrayForm
//         formArray.removeAt(i);
//         return;
//       }

//       i++;
//     });
//   }
// }
