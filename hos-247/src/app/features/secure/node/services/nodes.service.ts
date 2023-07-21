import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { NodeConfigRepository } from '@features/secure/node/services/node-config.repository';

import { INode } from '../models';

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

	update(
		id: number,
		data: { name: string; description: string },
	): Observable<INode[]> {
		const nodes = this.nodeConfigRepository.getNode();
		const newNode = this.replaceById(nodes, id, data);
		this.nodeConfigRepository.setNode(newNode);
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

	// findNodeById(nodes: INode[], id: number): INode | null {
	// 	let result = null;

	// 	for (let node of nodes) {
	// 		result = this.findNode(node, id);
	// 		if (result) {
	// 			break;
	// 		}
	// 	}

	// 	return result;
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
