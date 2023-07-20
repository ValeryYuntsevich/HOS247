import * as core from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
	MatTreeFlatDataSource,
	MatTreeFlattener,
} from '@angular/material/tree';

import { INode, IFlatNode } from './models';

@core.Component({
	selector: 'app-node-page',
	templateUrl: './node-page.component.html',
	styleUrls: ['./node-page.component.scss'],
})
export class NodePageComponent {
	node: INode[] = [
		{
			id: 1,
			name: 'Apartment_1',
			description: '',
			volume: 100,
			boxes: [
				{
					id: 2,
					name: 'Box_1',
					description: '',
					volume: 100,
					boxes: [
						{
							id: 3,
							name: 'Box_1.1',
							description: '',
							volume: 100,
						},
					],
				},
				{
					id: 4,
					name: 'Box_2',
					description: '',
					volume: 100,
				},
			],
		},
		{
			id: 5,
			name: 'Apartment_2',
			description: '',
			volume: 100,
			boxes: [
				{
					id: 6,
					name: 'Box_1',
					description: '',
					volume: 100,
					boxes: [
						{
							id: 7,
							name: 'Box_1.1',
							description: '',
							volume: 100,
						},
					],
				},
				{
					id: 8,
					name: 'Box_2',
					description: '',
					volume: 100,
				},
			],
		},
		{
			id: 9,
			name: 'Apartment_2',
			description: '',
			volume: 100,
			boxes: [
				{
					id: 10,
					name: 'Box_1',
					description: '',
					volume: 100,
				},
				{
					id: 11,
					name: 'Box_2',
					description: '',
					volume: 100,
				},
			],
		},
	];

	private _transformer = (node: INode, level: number) => {
		return {
			expandable: !!node.boxes && node.boxes.length > 0,
			data: { ...node },
			level: level,
		};
	};

	treeControl = new FlatTreeControl<any>(
		node => node.level,
		node => node.expandable,
	);

	treeFlattener = new MatTreeFlattener(
		this._transformer,
		node => node.level,
		node => node.expandable,
		node => node.boxes,
	);

	dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

	constructor() {
		this.dataSource.data = this.node;
	}

	hasChild = (_: number, node: IFlatNode) => node.expandable;
}
