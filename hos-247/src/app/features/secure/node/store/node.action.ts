import { createAction, props } from '@ngrx/store';

import { INewNode, INode, IUpdatedNode, ActionType } from '../models';

export const initializeNode = createAction(ActionType.Initialize);

export const readNode = createAction(
	ActionType.Read,
	props<{ nodes: INode[] }>(),
);

export const deleteNode = createAction(
	ActionType.Delete,
	props<{ id: number }>(),
);

export const updateNode = createAction(
	ActionType.Update,
	props<{ id: number; data: IUpdatedNode }>(),
);

export const createNewNode = createAction(
	ActionType.Create,
	props<{ data: INewNode }>(),
);

export const addNodeById = createAction(
	ActionType.AddById,
	props<{ id: number; data: INewNode[] }>(),
);
