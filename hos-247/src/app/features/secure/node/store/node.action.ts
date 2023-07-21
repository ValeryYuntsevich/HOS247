import { createAction, props } from '@ngrx/store';

import { ActionType } from '../models/enums';
import { INode } from '../models';

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
	props<{ id: number; data: { name: string; description: string } }>(),
);
