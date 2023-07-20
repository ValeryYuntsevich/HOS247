import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NodePageComponent } from './node-page.component';

const routes: Routes = [
	{
		path: '',
		component: NodePageComponent,
		data: {
			title: 'node',
			description: 'login.meta.tag',
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NodePageRoutingModule {}
