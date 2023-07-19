import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternalUrls } from '@core/models';
import { SystemErrorLayoutComponent } from './layout/system-error-layout.component';
import { SYSTEM_ERROR_LAYOUT_ROUTES } from './system-error-layout-routes';

const routes: Routes = [
	{
		path: InternalUrls.Base,
		component: SystemErrorLayoutComponent,
		children: SYSTEM_ERROR_LAYOUT_ROUTES,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SystemErrorLayoutRoutingModule {}
