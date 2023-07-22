import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { NodeConfigRepository } from '@features/secure/node/services/node-config.repository';

import { INewNode, INode, IUpdatedNode } from '../models';

@Injectable({
	providedIn: 'root',
})
export class NodesService {
	private URL = '../../../../assets/db/data.json';

	constructor(
		private readonly http: HttpClient,
		private readonly nodeConfigRepository: NodeConfigRepository,
	) {}

	get(): Observable<INode[]> {
		return of(this.nodeConfigRepository.getNode());
	}

	update(id: number, data: IUpdatedNode): Observable<INode[]> {
		const nodes = this.nodeConfigRepository.getNode();
		const newNode = this.replaceById(nodes, id, data);
		this.nodeConfigRepository.setNode(newNode);
		return of(this.nodeConfigRepository.getNode());
	}

	create(data: INewNode): Observable<INode[]> {
		const nodes = this.nodeConfigRepository.getNode();
		const id = this.getUniqueId(nodes);
		const newNode = { id, ...data };
		nodes.push(newNode);
		this.nodeConfigRepository.setNode(nodes);
		return of(this.nodeConfigRepository.getNode());
	}

	delete(id: number): Observable<INode[]> {
		const nodes = this.nodeConfigRepository.getNode();
		const newNode = this.removeById(nodes, id);
		this.nodeConfigRepository.setNode(newNode);
		return of(this.nodeConfigRepository.getNode());
	}

	initialize(): Observable<string> {
		return this.http.get<string>(this.URL);
	}

	private replaceById = (
		nodes: any,
		id: number,
		data: { name: string; description: string },
	) =>
		nodes.map((node: any) => {
			if (node.id === id) {
				node.name = data.name;
				node.description = data.description;
			} else if (node.boxes)
				node.boxes = this.replaceById(node.boxes, id, data);
			return node;
		});

	private removeById = (nodes: any, id: number): INode[] =>
		nodes.reduce(
			(accum: any, currentItem: any) =>
				currentItem.id === id
					? accum
					: [
							...accum,
							{
								...currentItem,
								...(currentItem.boxes && {
									boxes: this.removeById(currentItem.boxes, id),
								}),
							},
					  ],
			[],
		);

	private getUniqueId(nodes: INode[]): number {
		const ids: number[] = [];
		JSON.stringify(nodes, (key, value) => {
			if (key === 'id') {
				ids.push(value);
			}
			return value;
		});
		return Math.max(...ids) + 1;
	}

	// reduceTree<Item, Acc>(
	// 	next: (item: Item) => Item[],
	// 	reducer: (acc: Acc, item: Item) => Acc,
	// ) {
	// 	const step = (acc: Acc, item: Item): Acc =>
	// 		next(item).reduce((_, child) => step(_, child), reducer(acc, item));
	// 	return step;
	// }

	// // Test
	// const allIds = reduceTree(
	//     (item: TreeItem) => item.children,
	//     (allIds: string[], item) => [...allIds, item.uid]
	// )(
	//     [], obj
	// );

	// findNodeIds(nodes: INode[]): any {
	// 	return this.reduceTree(
	// 		(item: any) => item.boxes,
	// 		(allIds: any[], item) => [...allIds, item.id],
	// 	)([], obj);
	// }

	// findNode(node: INode, id: number): INode | null {
	// 	if (node.id === id) {
	// 		return node;
	// 	}
	// 	if (node.boxes) {
	// 		for (let item of node.boxes) {
	// 			let check = this.findNode(item, id);
	// 			if (check) {
	// 				return check;
	// 			}
	// 		}
	// 	}
	// 	return null;
	// }
}
