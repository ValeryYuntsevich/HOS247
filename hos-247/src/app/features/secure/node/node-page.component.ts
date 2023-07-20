import * as core from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
	MatTreeFlatDataSource,
	MatTreeFlattener,
} from '@angular/material/tree';
import { INode, IFlatNode } from './models';
import { Store, select } from '@ngrx/store';
import { initializeNode } from './store/node.action';
import { selectBooks } from './store/node.selector';
import { Observable, Subscription } from 'rxjs';

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

	constructor(private store: Store<INode>) {}

	ngOnInit(): void {
		this.init();
		const subscription = this.node$.subscribe(
			data => (this.dataSource.data = data),
		);
		this.subscriptions.add(subscription);
	}

	hasChild = (_: number, node: IFlatNode) => node.expandable;

	ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}

	private init(): void {
		this.store.dispatch(initializeNode());
		this.node$ = this.store.pipe(select(selectBooks));
	}
}
