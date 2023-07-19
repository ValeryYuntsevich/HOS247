import { Routes } from '@angular/router';

export const AUTH_LAYOUT_ROUTES: Routes = [
	{
		path: '',
		redirectTo: '/auth/sign-in',
		pathMatch: 'full',
	},
	{
		path: 'sign-in',
		loadChildren: () => import('./pages').then(m => m.LoginPageModule),
	},
	{
		path: 'sign-up',
		loadChildren: () => import('./pages').then(m => m.RegisterPageModule),
	},
];
