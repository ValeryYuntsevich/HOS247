import { IPublicMenu } from '@core/models';

export const PUBLIC_MENU_LIST: IPublicMenu[] = [
	{
		text: 'publicMenuItems.home',
		icon: 'home',
		routerLink: '/',
	},
	{
		text: 'publicMenuItems.privacyPolicy',
		icon: 'supervised_user_circle',
		routerLink: '/privacy-policy',
	},
	{
		text: 'publicMenuItems.about',
		icon: 'supervised_user_circle',
		routerLink: '/about',
	},
	{
		text: 'Suit',
		icon: 'inventory_2',
		children: [
			{
				text: 'Category',
				icon: 'category',
				routerLink: '/product/category',
			},
		],
	},
];
