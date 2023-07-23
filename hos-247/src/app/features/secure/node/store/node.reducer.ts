import { createReducer, on } from '@ngrx/store';
import { readNode } from './node.action';
import { INode } from '../models';

export const initialState: ReadonlyArray<INode> = [];

export const nodeReducer = createReducer(
	initialState,
	on(readNode, (state, { nodes }) => {
		return nodes;
	}),
);
