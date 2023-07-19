import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternalUrls } from '@core/models';
import { SubFeatures } from '../../models';
import { ServerErrorPageComponent } from './components/server-error-page.component';

const routes: Routes = [
	{
		path: InternalUrls.Base,
		component: ServerErrorPageComponent,
		data: {
			title: SubFeatures.ServerError,
			description: 'Description Meta Tag Content',
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ServerErrorPageRoutingModule {}
