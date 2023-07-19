import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './components/login-page.component';

const routes: Routes = [
	{
		path: '',
		component: LoginPageComponent,
		data: {
			title: 'sign-in',
			description: 'login.meta.tag',
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LoginPageRoutingModule {}
