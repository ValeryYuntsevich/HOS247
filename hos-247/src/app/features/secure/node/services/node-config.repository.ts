import { Inject, Injectable } from '@angular/core';

import {
	LOCAL_STORAGE,
	LocalStorageService,
} from '@core/repositories/local-storage.repository';

import { INode } from '../models';

@Injectable({
	providedIn: 'root',
})
export class NodeConfigRepository {
	private readonly nodeKey = 'node';

	public constructor(
		@Inject(LOCAL_STORAGE)
		private readonly localStorageService: LocalStorageService,
	) {}

	setNode(node: string): void {
		this.localStorageService.setItem(this.nodeKey, JSON.stringify(node));
	}

	getNode(): INode[] {
		return JSON.parse(this.localStorageService.getItem(this.nodeKey) as string);
	}
}