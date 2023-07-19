import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PUBLIC_LAYOUT_ROUTES } from './public-layout-routes';

import { PublicLayoutComponent } from './layout/public-layout.component';

const routes: Routes = [
	{
		path: '',
		component: PublicLayoutComponent,
		children: PUBLIC_LAYOUT_ROUTES,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PublicLayoutRoutingModule {}
