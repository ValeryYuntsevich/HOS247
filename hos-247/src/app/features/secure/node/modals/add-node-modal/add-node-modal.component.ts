import * as core from '@angular/core';
import {
	UntypedFormGroup,
	UntypedFormBuilder,
	Validators,
	UntypedFormArray,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { INode, NodeType } from '../../models';

@core.Component({
	selector: 'app-add-node-modal',
	templateUrl: './add-node-modal.component.html',
	styleUrls: ['./add-node-modal.component.scss'],
})
export class AddNodeModalComponent implements core.OnInit {
	addNodeFormGroup = new UntypedFormGroup({});

	readonly entitiesPropertyName = 'entities';
	readonly namePropertyName = 'name';
	readonly typePropertyName = 'type';
	readonly volumePropertyName = 'volume';
	readonly descriptionPropertyName = 'description';

	constructor(
		@core.Inject(MAT_DIALOG_DATA)
		private readonly data: { id: number; nodes: INode[]; title: string },
		private readonly formBuilder: UntypedFormBuilder,
		private readonly dialogRef: MatDialogRef<AddNodeModalComponent>,
	) {}

	ngOnInit(): void {
		this.createNodeForm();
	}

	add(): void {
		this.dialogRef.close(this.entities.value);
	}

	addEntitiesControl(): void {
		this.entities.push(this.addFormGroup());
	}

	deleteEntitiesControl(index: number): void {
		this.entities.removeAt(index);
	}

	get entities(): UntypedFormArray {
		return this.addNodeFormGroup.get(
			this.entitiesPropertyName,
		) as UntypedFormArray;
	}

	get node(): INode | null {
		let result = null;
		for (let node of this.data.nodes) {
			result = this.findNodeById(node, this.data.id);
			if (result) {
				break;
			}
		}
		return result;
	}

	get type(): NodeType {
		return this.node ? NodeType[this.node.type] : NodeType.Container;
	}

	get title(): string {
		return this.data.title;
	}

	get rootTotalVolume(): any {
		const rootNode = this.searchNode(this.data.id, this.data.nodes);
		return rootNode;
	}

	get isContainer(): boolean {
		return this.type === NodeType.Container;
	}

	private addFormGroup(): UntypedFormGroup {
		const group = this.formBuilder.group({
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

		return group;
	}

	private findNodeById(node: INode, id: number): INode | null {
		if (node.id === id) {
			return node;
		}
		if (node.boxes) {
			for (let item of node.boxes) {
				let check = this.findNodeById(item, id);
				if (check) {
					return check;
				}
			}
		}
		return null;
	}

	private searchNode(id: number, nodes: INode[]): INode[] {
		return nodes?.filter(({ boxes }: INode) =>
			boxes?.find((box: INode) => box.id === id),
		);
	}

	private createNodeForm(): void {
		this.addNodeFormGroup = this.formBuilder.group({
			entities: this.formBuilder.array([this.addFormGroup()]),
		});
	}
}
