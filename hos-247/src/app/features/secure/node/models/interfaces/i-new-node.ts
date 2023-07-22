import { NodeType } from '../enums';

export interface INewNode {
	name: string;
	description: string;
	volume: number;
	type: NodeType;
}
