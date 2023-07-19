import * as core from '@angular/core';
import * as forms from '@angular/forms';

import { TMatFormFieldControl } from '@core/models';
import { BaseInputControl } from '../../base/base-input-control';

const PASSWORD_CONTROL_VALUE_ACCESSOR: core.Provider = {
	provide: forms.NG_VALUE_ACCESSOR,
	useExisting: core.forwardRef(() => InputPasswordControlComponent),
	multi: true,
};

@core.Component({
	selector: 'app-input-password-control',
	templateUrl: './input-password-control.component.html',
	viewProviders: [PASSWORD_CONTROL_VALUE_ACCESSOR],
	changeDetection: core.ChangeDetectionStrategy.OnPush,
})
export class InputPasswordControlComponent extends BaseInputControl {
	@core.Input() public params: TMatFormFieldControl;

	public hide = true;

	public constructor(
		@core.Optional() @core.Self() ngControl: forms.NgControl,
		@core.Optional() controlContainer: forms.FormGroupDirective,
	) {
		super(ngControl, controlContainer);
	}
}
