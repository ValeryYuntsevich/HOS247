import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';

import { NodesService } from '../services/nodes.service';
import { NodeConfigRepository } from '../services/node-config.repository';

import { initializeNode, readNode } from './node.action';

@Injectable()
export class NodesEffect {
	constructor(
		private readonly actions$: Actions,
		private readonly nodesService: NodesService,
		private readonly nodeConfigRepository: NodeConfigRepository,
	) {}

	init$ = createEffect(() =>
		this.actions$.pipe(
			ofType(initializeNode),
			switchMap(() =>
				this.nodesService.initialize().pipe(
					tap(data => this.nodeConfigRepository.setNode(data)),
					map(() => readNode({ nodes: this.nodeConfigRepository.getNode() })),
				),
			),
		),
	);
}
