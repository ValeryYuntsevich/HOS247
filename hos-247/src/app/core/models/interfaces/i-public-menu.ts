import { IMenu } from '.';

export interface IPublicMenu extends IMenu {
	children?: IMenu[];
}
