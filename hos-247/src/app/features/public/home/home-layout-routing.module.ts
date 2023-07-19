import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternalUrls } from '@core/models';
import { HOME_LAYOUT_ROUTES } from './home-layout-routes';

import { HomeLayoutComponent } from './layout/home-layout.component';

const routes: Routes = [
	{
		path: InternalUrls.Base,
		component: HomeLayoutComponent,
		children: HOME_LAYOUT_ROUTES,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeLayoutRoutingModule {}
