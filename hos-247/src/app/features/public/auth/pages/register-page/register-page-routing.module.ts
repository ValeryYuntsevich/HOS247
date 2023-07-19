import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternalUrls } from '@core/models';

import { RegisterPageComponent } from './components/register-page.component';

const routes: Routes = [
	{
		path: '',
		component: RegisterPageComponent,
		data: {
			title: 'sign-up',
			description: 'register.meta.tag',
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
