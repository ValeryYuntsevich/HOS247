import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from '@core/guards/authentication.guard.service';
import { InternalUrls } from '@core/models';

export const APP_ROUTES: Routes = [
	{
		path: InternalUrls.Secure,
		canActivate: [AuthenticationGuard],
		loadChildren: () =>
			import('./features/secure').then(m => m.SecureLayoutModule),
	},
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
