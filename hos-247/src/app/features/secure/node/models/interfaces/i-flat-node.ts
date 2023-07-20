import { INode } from './i-node';

export interface IFlatNode {
	expandable: boolean;
	data: INode;
	level: number;
}
