import { Routes } from '@angular/router';

export const SYSTEM_ERROR_LAYOUT_ROUTES: Routes = [
	{
		path: '',
		redirectTo: '/system-error/404',
		pathMatch: 'full',
	},
	{
		path: '404',
		loadChildren: () => import('./pages').then(m => m.NotFoundPageModule),
	},
	{
		path: '500',
		loadChildren: () => import('./pages').then(m => m.ServerErrorPageModule),
	},
];
