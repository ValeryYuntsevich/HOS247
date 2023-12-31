import { NodeType } from '../enums';

export interface INode {
	id: number;
	name: string;
	description: string;
	volume: number;
	type: NodeType;
	boxes?: INode[];
}
