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
	readonly freeVolumePropertyName = 'freeVolume';
	readonly typePropertyName = 'type';
	readonly descriptionPropertyName = 'description';

	constructor(
		@core.Inject(MAT_DIALOG_DATA) private readonly data: INode,
		private readonly formBuilder: UntypedFormBuilder,
	) {}

	ngOnInit(): void {
		this.createNodeForm();
	}

	get nodeFreeVolume(): number {
		let result =
			this.data?.boxes && this.data.boxes.length
				? this.data.boxes.reduce((acc, item) => {
						return acc + Number(item.volume);
				  }, 0)
				: this.data!.volume;
		return result ? this.data!.volume - result : this.data!.volume;
	}

	private createNodeForm(): void {
		this.infoNodeFormGroup = this.formBuilder.group({
			[this.namePropertyName]: [{ value: this.data.name, disabled: true }],
			[this.freeVolumePropertyName]: [
				{ value: this.nodeFreeVolume, disabled: true },
			],
			[this.volumePropertyName]: [{ value: this.data.volume, disabled: true }],
			[this.typePropertyName]: [{ value: this.data.type, disabled: true }],
			[this.descriptionPropertyName]: [
				{ value: this.data.description, disabled: true },
			],
		});
	}
}
