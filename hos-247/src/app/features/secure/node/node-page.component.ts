import * as core from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
	MatTreeFlatDataSource,
	MatTreeFlattener,
} from '@angular/material/tree';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { INode, IFlatNode, NodeType, INodeFormData } from './models';
import {
	addNodeById,
	createNewNode,
	deleteNode,
	initializeNode,
	updateNode,
} from './store/node.action';
import { selectBooks } from './store/node.selector';
import { DialogService } from './services/dialog.service';

@core.Component({
	selector: 'app-node-page',
	templateUrl: './node-page.component.html',
	styleUrls: ['./node-page.component.scss'],
})
export class NodePageComponent implements core.OnInit, core.OnDestroy {
	node$: Observable<INode[]>;

	private readonly subscriptions = new Subscription();

	private _transformer = (node: INode, level: number) => {
		return {
			expandable: !!node.boxes && node.boxes.length > 0,
			data: { ...node },
			level: level,
		};
	};

	treeControl = new FlatTreeControl<IFlatNode>(
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

	constructor(
		private readonly store: Store<INode>,
		private readonly dialogService: DialogService,
	) {}

	ngOnInit(): void {
		this.init();
		const subscription = this.node$.subscribe(
			data => (this.dataSource.data = data),
		);
		this.subscriptions.add(subscription);
	}

	confirmDialog(node: INode): void {
		const subscription = this.dialogService
			.confirmDialog()
			.subscribe(confirmed => {
				if (confirmed) {
					this.store.dispatch(deleteNode({ id: node.id }));
				}
			});
		this.subscriptions.add(subscription);
	}

	editDialog(node: INode): void {
		this.dialogService.updateDialog(node).subscribe(data => {
			this.store.dispatch(updateNode({ id: node.id, data }));
		});
	}

	addNewContainer(): void {
		this.dialogService.addNewDialog().subscribe(data => {
			this.store.dispatch(createNewNode({ data }));
		});
	}

	addContainer(node: INode): void {
		const id = node.id;
		const nodes = this.dataSource.data;
		this.dialogService
			.addDialog(id, nodes, 'containers')
			.subscribe((formData: INodeFormData[]) => {
				const data = formData.map(container => ({
					...container,
					type: NodeType.Container,
				}));
				this.store.dispatch(addNodeById({ id, data }));
			});
	}

	addThing(node: INode): void {
		const id = node.id;
		const nodes = this.dataSource.data;
		this.dialogService.addDialog(id, nodes, 'things').subscribe(formData => {
			const data = formData.map(thing => ({
				...thing,
				type: NodeType.Thing,
			}));
			this.store.dispatch(addNodeById({ id, data }));
		});
	}

	infoDialog(node: INode): void {
		const subscription = this.dialogService.infoDialog(node).subscribe();
		this.subscriptions.add(subscription);
	}

	hasChild = (_: number, node: IFlatNode): boolean => node.expandable;

	isContainer = (type: NodeType): boolean => type === NodeType.Container;

	ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}

	private init(): void {
		this.store.dispatch(initializeNode());
		this.node$ = this.store.pipe(select(selectBooks));
	}
}
