import { Routes } from '@angular/router';

export const PUBLIC_LAYOUT_ROUTES: Routes = [
	{
		path: '',
		redirectTo: '/auth/sign-in',
		pathMatch: 'full',
	},
	{
		path: 'auth/sign-in',
		loadChildren: () =>
			import('./auth/pages/login-page/login-page.module').then(
				m => m.LoginPageModule,
			),
	},
	{
		path: 'system-error',
		loadChildren: () =>
			import('./system-error').then(m => m.SystemErrorLayoutModule),
	},
	{
		path: '**',
		loadChildren: () =>
			import('./system-error/pages').then(m => m.NotFoundPageModule),
	},
];
