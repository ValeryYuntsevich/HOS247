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

	initialize(): Observable<string> {
		return this.http.get<string>(this.URL);
	}
}
