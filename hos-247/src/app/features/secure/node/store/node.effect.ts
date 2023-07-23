import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';

import { NodesRepository } from '../services/nodes.repository';
import { NodeConfigRepository } from '../services/node-config.repository';

import {
	addNodeById,
	createNewNode,
	deleteNode,
	initializeNode,
	readNode,
	updateNode,
} from './node.action';

@Injectable()
export class NodesEffect {
	constructor(
		private readonly actions$: Actions,
		private readonly nodesService: NodesRepository,
		private readonly nodeConfigRepository: NodeConfigRepository,
	) {}

	init$ = createEffect(() =>
		this.actions$.pipe(
			ofType(initializeNode),
			switchMap(() => {
				const nodes = this.nodeConfigRepository.getNode();
				return this.nodesService.initialize().pipe(
					tap(data => {
						if (!nodes) {
							this.nodeConfigRepository.setNode(data);
						}
					}),
					map(() => readNode({ nodes: this.nodeConfigRepository.getNode() })),
				);
			}),
		),
	);

	createNew$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(createNewNode),
			switchMap(actions => {
				return this.nodesService.createNew(actions.data).pipe(
					map(() => {
						return readNode({ nodes: this.nodeConfigRepository.getNode() });
					}),
				);
			}),
		);
	});

	addNewById$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(addNodeById),
			switchMap(actions => {
				return this.nodesService.addNewById(actions.id, actions.data).pipe(
					map(() => {
						return readNode({ nodes: this.nodeConfigRepository.getNode() });
					}),
				);
			}),
		);
	});

	update$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(updateNode),
			switchMap(actions => {
				return this.nodesService.update(actions.id, actions.data).pipe(
					map(() => {
						return readNode({ nodes: this.nodeConfigRepository.getNode() });
					}),
				);
			}),
		);
	});

	delete$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(deleteNode),
			switchMap(actions => {
				return this.nodesService.delete(actions.id).pipe(
					map(() => {
						return readNode({ nodes: this.nodeConfigRepository.getNode() });
					}),
				);
			}),
		);
	});
}
