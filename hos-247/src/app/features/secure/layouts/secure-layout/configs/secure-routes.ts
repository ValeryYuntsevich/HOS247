import { Routes } from '@angular/router';

import { Features, InternalUrls } from '@core/models';

export const SECURE_ROUTES: Routes = [
	{
		path: InternalUrls.Base,
		redirectTo: '/node',
		pathMatch: 'full',
	},
	{
		path: 'node',
		loadChildren: () =>
			import('../../../node/node-page.module').then(m => m.NodePageModule),
	},
];
