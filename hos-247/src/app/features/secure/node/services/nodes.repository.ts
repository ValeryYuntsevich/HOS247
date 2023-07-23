import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { NodeConfigRepository } from '@features/secure/node/services/node-config.repository';

import { INewNode, INode, IUpdatedNode } from '../models';

@Injectable()
export class NodesRepository {
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

	createNew(data: INewNode): Observable<INode[]> {
		const nodes = this.nodeConfigRepository.getNode();
		const id = this.getUniqueId(nodes);
		const newNode = { id, ...data };
		nodes.push(newNode);
		this.nodeConfigRepository.setNode(nodes);
		return of(this.nodeConfigRepository.getNode());
	}

	addNewById(id: number, data: INewNode[]): Observable<INode[]> {
		const nodes = this.nodeConfigRepository.getNode();
		const uniqueId = this.getUniqueId(nodes);
		const newNodes = data.map((item, index) => ({
			...item,
			id: index + uniqueId,
		}));
		const modifyNodes = this.addNodeById(nodes, id, newNodes);
		this.nodeConfigRepository.setNode(modifyNodes);
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

	private addNodeById = (
		nodes: INode[],
		id: number,
		newNodes: INode[],
	): INode[] =>
		nodes.map(node => {
			if (node.id === id) {
				node.boxes =
					node.boxes && node.boxes.length
						? [...node.boxes].concat(newNodes)
						: newNodes;
			} else if (node.boxes)
				node.boxes = this.addNodeById(node.boxes, id, newNodes);
			return node;
		});

	private replaceById = (
		nodes: INode[],
		id: number,
		data: { name: string; description: string },
	) =>
		nodes.map(node => {
			if (node.id === id) {
				node.name = data.name;
				node.description = data.description;
			} else if (node.boxes)
				node.boxes = this.replaceById(node.boxes, id, data);
			return node;
		});

	private removeById = (nodes: INode[], id: number): INode[] =>
		nodes.reduce(
			(accum: INode[], currentItem: INode) =>
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
}
