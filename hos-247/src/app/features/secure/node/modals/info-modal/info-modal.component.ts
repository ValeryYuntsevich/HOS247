import * as core from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { INode } from '../../models';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';

@core.Component({
	selector: 'app-info-modal',
	templateUrl: './info-modal.component.html',
	styleUrls: ['./info-modal.component.scss'],
})
export class InfoModalComponent implements core.OnInit {
	infoNodeFormGroup = new UntypedFormGroup({});

	readonly namePropertyName = 'name';
	readonly volumePropertyName = 'volume';
	readonly typePropertyName = 'type';
	readonly descriptionPropertyName = 'description';

	constructor(
		@core.Inject(MAT_DIALOG_DATA) private readonly data: INode,
		private readonly formBuilder: UntypedFormBuilder,
	) {}

	ngOnInit(): void {
		this.createNodeForm();
	}

	private createNodeForm(): void {
		this.infoNodeFormGroup = this.formBuilder.group({
			[this.namePropertyName]: [{ value: this.data.name, disabled: true }],
			[this.volumePropertyName]: [{ value: this.data.volume, disabled: true }],
			[this.typePropertyName]: [{ value: this.data.type, disabled: true }],
			[this.descriptionPropertyName]: [
				{ value: this.data.description, disabled: true },
			],
		});
	}
}
