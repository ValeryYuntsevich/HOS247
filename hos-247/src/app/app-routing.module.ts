import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternalUrls } from '@core/models';

export const APP_ROUTES: Routes = [
	// {
	// 	path: InternalUrls.Secure,
	// 	loadChildren: () =>
	// 		import('./features/secure').then(m => m.SecureLayoutModule),
	// },
	{
		path: InternalUrls.Base,
		loadChildren: () =>
			import('./features/public').then(m => m.PublicLayoutModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(APP_ROUTES)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
