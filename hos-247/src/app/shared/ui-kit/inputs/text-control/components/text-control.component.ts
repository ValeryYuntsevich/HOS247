import * as core from '@angular/core';
import * as forms from '@angular/forms';

import { TMatFormFieldControl } from '@core/models';
import { BaseInputControl } from '../../base/base-input-control';
import { DEFAULT_TEXT_CONTROL } from './configs';

const TEXT_CONTROL_VALUE_ACCESSOR: core.Provider = {
	provide: forms.NG_VALUE_ACCESSOR,
	useExisting: core.forwardRef(() => TextControlComponent),
	multi: true,
};

@core.Component({
	selector: 'app-text-control',
	templateUrl: './text-control.component.html',
	viewProviders: [TEXT_CONTROL_VALUE_ACCESSOR],
})
export class TextControlComponent extends BaseInputControl {
	@core.Input() public params: TMatFormFieldControl = DEFAULT_TEXT_CONTROL;

	public constructor(
		@core.Optional() @core.Self() ngControl: forms.NgControl,
		@core.Optional() controlContainer: forms.FormGroupDirective,
	) {
		super(ngControl, controlContainer);
	}
}
