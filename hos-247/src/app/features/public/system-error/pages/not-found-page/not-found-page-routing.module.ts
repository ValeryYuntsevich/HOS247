import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternalUrls } from '@core/models';
import { PATH_RESOLVE } from '@core/helpers/providers/path-resolve.provider';
import { NotFoundPageComponent } from './components/not-found-page.component';

import { SubFeatures } from '../../models';

const routes: Routes = [
	{
		path: InternalUrls.Base,
		component: NotFoundPageComponent,
		resolve: { path: PATH_RESOLVE },
		data: {
			title: SubFeatures.NotFound,
			description: '404.meta.tag',
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NotFoundPageRoutingModule {}
