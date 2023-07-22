import * as core from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { INode } from '../../models';

@core.Component({
	selector: 'app-update-modal',
	templateUrl: './update-modal.component.html',
	styleUrls: ['./update-modal.component.scss'],
})
export class UpdateModalComponent implements core.OnInit {
	updateNodeFormGroup = new UntypedFormGroup({});

	readonly namePropertyName = 'name';
	readonly descriptionPropertyName = 'description';

	constructor(
		@core.Inject(MAT_DIALOG_DATA) private readonly data: INode,
		private readonly formBuilder: UntypedFormBuilder,
		private readonly dialogRef: MatDialogRef<UpdateModalComponent>,
	) {}

	ngOnInit(): void {
		this.createLoginForm();
	}

	apply(): void {
		this.dialogRef.close(this.updateNodeFormGroup.value);
	}

	private createLoginForm(): void {
		this.updateNodeFormGroup = this.formBuilder.group({
			[this.namePropertyName]: [this.data.name],
			[this.descriptionPropertyName]: [this.data.description],
		});
	}
}
