import { createReducer, on } from '@ngrx/store';
import { readNode } from './node.action';

export const initialState: ReadonlyArray<any> = [];

export const nodeReducer = createReducer(
	initialState,
	on(readNode, (state, { nodes }) => {
		return nodes;
	}),
);
