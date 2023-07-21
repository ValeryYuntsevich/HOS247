import * as core from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { INode } from '../../models';

@core.Component({
	selector: 'app-edit-modal',
	templateUrl: './edit-modal.component.html',
	styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements core.OnInit {
	editNodeFormGroup = new UntypedFormGroup({});

	readonly namePropertyName = 'name';
	readonly descriptionPropertyName = 'description';

	constructor(
		@core.Inject(MAT_DIALOG_DATA) private readonly data: INode,
		private readonly formBuilder: UntypedFormBuilder,
		private readonly dialogRef: MatDialogRef<EditModalComponent>,
	) {}

	ngOnInit(): void {
		this.createLoginForm();
	}

	apply(): void {
		this.dialogRef.close(this.editNodeFormGroup.value);
	}

	private createLoginForm(): void {
		this.editNodeFormGroup = this.formBuilder.group({
			[this.namePropertyName]: [this.data.name],
			[this.descriptionPropertyName]: [this.data.description],
		});
	}
}
