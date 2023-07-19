import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AUTH_LAYOUT_ROUTES } from './auth-layout-routes';
import { AuthLayoutComponent } from './layout/auth-layout.component';

const routes: Routes = [
	{
		path: '',
		component: AuthLayoutComponent,
		children: AUTH_LAYOUT_ROUTES,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthLayoutRoutingModule {}
