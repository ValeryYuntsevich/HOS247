import * as core from '@angular/core';
import * as forms from '@angular/forms';

import { Subscription } from 'rxjs';
import { filter, map, pairwise } from 'rxjs/operators';

@core.Directive()
export abstract class BaseInputControl
	implements core.OnInit, core.OnDestroy, forms.ControlValueAccessor
{
	public valueControl: forms.UntypedFormControl;

	private readonly subscriptions = new Subscription();

	public constructor(
		private readonly ngControl: forms.NgControl,
		private readonly controlContainer: forms.FormGroupDirective,
	) {
		if (this.ngControl) {
			this.ngControl.valueAccessor = this;
		}
	}

	public ngOnInit(): void {
		this.loadInitialData();
		this.setupControlListeners();
	}

	public writeValue(value: string): void {
		// throw new Error('Method not implemented.');
	}

	public propagateChange = (value: any) => {
		throw new Error('Method not implemented.');
	};

	public registerOnChange(fn: any): void {
		this.propagateChange = fn;
	}

	public onTouched = () => {
		throw new Error('Method not implemented.');
	};

	public registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	public ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}

	private loadInitialData(): void {
		this.valueControl = this.controlContainer.form.controls[
			this.ngControl.name as string
		] as forms.UntypedFormControl;
	}

	private setupControlListeners(): void {
		const subscription = this.valueControl.valueChanges
			.pipe(
				pairwise(),
				filter(([oldValue, newValue]) => oldValue !== newValue),
				map(([, newValue]) => newValue),
			)
			.subscribe((newValue: any) => this.propagateChange(newValue));

		this.subscriptions.add(subscription);
	}
}
