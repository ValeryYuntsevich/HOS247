import { Routes } from '@angular/router';

import { Features, InternalUrls } from '@core/models';

export const SECURE_ROUTES: Routes = [
	{
		path: InternalUrls.Base,
		redirectTo: Features.Auth.toLocaleLowerCase(),
		pathMatch: 'full',
	},
];
