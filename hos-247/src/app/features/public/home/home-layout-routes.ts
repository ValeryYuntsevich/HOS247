import { Routes } from '@angular/router';

import { InternalUrls, Features } from '@core/models';

export const HOME_LAYOUT_ROUTES: Routes = [
	{
		path: InternalUrls.Base,
		pathMatch: 'full',
		redirectTo: InternalUrls.Home,
	},
	{
		path: Features.Home.toLocaleLowerCase(),
		loadChildren: () => import('./pages').then(m => m.HomePageModule),
	},
];
