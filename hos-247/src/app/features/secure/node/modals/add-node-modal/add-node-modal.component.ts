import * as core from '@angular/core';
import {
	UntypedFormGroup,
	UntypedFormBuilder,
	Validators,
	UntypedFormArray,
	ValidatorFn,
	AbstractControl,
	ValidationErrors,
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

	get nodeFreeVolume(): number {
		let result =
			this.node?.boxes && this.node.boxes.length
				? this.node.boxes.reduce((acc, item) => {
						return acc + Number(item.volume);
				  }, 0)
				: this.node!.volume;
		return result ? this.node!.volume - result : this.node!.volume;
	}

	get isFullLoaded(): number {
		return this.nodeFreeVolume;
	}

	get type(): NodeType {
		return this.node ? NodeType[this.node.type] : NodeType.Container;
	}

	get title(): string {
		return this.data.title;
	}

	get rootNode(): INode {
		return this.searchRootNode(this.data.nodes, this.data.id)[0];
	}

	get rootNodeFreeVolume(): number {
		let result =
			this.rootNode?.boxes && this.rootNode.boxes.length
				? this.rootNode.boxes.reduce((acc, item) => {
						return acc + Number(item.volume);
				  }, 0)
				: this.rootNode!.volume;
		return result ? this.rootNode!.volume - result : this.rootNode!.volume;
	}

	get isContainer(): boolean {
		return this.type === NodeType.Container;
	}

	private searchRootNode(nodes: INode[], currentId: number): INode[] {
		const find = ({ id, boxes }: INode) =>
			id === currentId || (boxes && boxes.some(find));
		return nodes.filter(find);
	}

	private addFormGroup(): UntypedFormGroup {
		const group = this.formBuilder.group({
			[this.namePropertyName]: [
				null,
				{ validators: [Validators.required, Validators.minLength(3)] },
			],
			[this.volumePropertyName]: [
				null,
				{
					validators: [Validators.required, Validators.min(1)],
				},
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

	private createNodeForm(): void {
		this.addNodeFormGroup = this.formBuilder.group({
			entities: this.formBuilder.array(
				[this.addFormGroup()],
				[this.checkerVolumeValidator(this.nodeFreeVolume)],
			),
		});
	}

	private checkerVolumeValidator =
		(freeVolume: number): ValidatorFn =>
		(control: AbstractControl): ValidationErrors | null => {
			const currentVolume = control.value.reduce((acc: number, item: INode) => {
				return acc + item.volume;
			}, 0);
			return currentVolume > freeVolume ? { isVolumeValid: true } : null;
		};
}
