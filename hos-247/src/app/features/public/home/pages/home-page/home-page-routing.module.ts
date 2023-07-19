import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternalUrls } from '@core/models';

import { HomePageComponent } from './components/home-page.component';

const routes: Routes = [
	{
		path: InternalUrls.Base,
		component: HomePageComponent,
		data: {
			title: 'SubFeatures.Register',
			description: 'register.meta.tag',
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomePageRoutingModule {}
