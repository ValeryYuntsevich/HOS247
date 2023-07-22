import * as core from '@angular/core';
import {
	UntypedFormGroup,
	UntypedFormBuilder,
	Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { NodeType } from '../../models';

@core.Component({
	selector: 'app-add-new-node-modal',
	templateUrl: './add-new-node-modal.component.html',
	styleUrls: ['./add-new-node-modal.component.scss'],
})
export class AddNewNodeModalComponent implements core.OnInit {
	addNewNodeNodeFormGroup = new UntypedFormGroup({});

	readonly namePropertyName = 'name';
	readonly volumePropertyName = 'volume';
	readonly typePropertyName = 'type';
	readonly descriptionPropertyName = 'description';

	constructor(
		private readonly formBuilder: UntypedFormBuilder,
		private readonly dialogRef: MatDialogRef<AddNewNodeModalComponent>,
	) {}

	ngOnInit(): void {
		this.createNodeForm();
	}

	add(): void {
		this.dialogRef.close(this.addNewNodeNodeFormGroup.value);
	}

	private createNodeForm(): void {
		this.addNewNodeNodeFormGroup = this.formBuilder.group({
			[this.namePropertyName]: [
				null,
				{ validators: [Validators.required, Validators.minLength(3)] },
			],
			[this.typePropertyName]: [
				NodeType.Container,
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
