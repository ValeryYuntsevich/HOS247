import * as core from '@angular/core';
import {
	UntypedFormGroup,
	UntypedFormBuilder,
	Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { INode } from '../../models';

@core.Component({
	selector: 'app-add-modal',
	templateUrl: './add-modal.component.html',
	styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent implements core.OnInit {
	addNodeFormGroup = new UntypedFormGroup({});

	readonly namePropertyName = 'name';
	readonly volumePropertyName = 'volume';
	readonly descriptionPropertyName = 'description';

	constructor(
		@core.Inject(MAT_DIALOG_DATA) private readonly data: INode,
		private readonly formBuilder: UntypedFormBuilder,
		private readonly dialogRef: MatDialogRef<AddModalComponent>,
	) {}

	ngOnInit(): void {
		this.createLoginForm();
	}

	add(): void {
		this.dialogRef.close(this.addNodeFormGroup.value);
	}

	private createLoginForm(): void {
		this.addNodeFormGroup = this.formBuilder.group({
			[this.namePropertyName]: [
				null,
				{ validators: [Validators.required, Validators.minLength(3)] },
			],
			[this.volumePropertyName]: [
				null,
				{ validators: [Validators.required, Validators.min(10)] },
			],
			[this.descriptionPropertyName]: [
				null,
				{
					validators: [
						Validators.required,
						Validators.maxLength(256),
						Validators.minLength(8),
					],
				},
			],
		});
	}
}
