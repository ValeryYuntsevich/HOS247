export interface INode {
	id: number;
	name: string;
	description: string;
	volume: number;
	boxes?: INode[];
}
