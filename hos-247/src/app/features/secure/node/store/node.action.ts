import { createAction, props } from '@ngrx/store';

import { ActionType } from '../models/enums';
import { INode } from '../models';

export const initializeNode = createAction(ActionType.Initialize);

export const readNode = createAction(
	ActionType.Read,
	props<{ nodes: INode[] }>(),
);
