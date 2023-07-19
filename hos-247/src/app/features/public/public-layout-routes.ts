import { Routes } from '@angular/router';

export const PUBLIC_LAYOUT_ROUTES: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadChildren: () => import('./home').then(m => m.HomeLayoutModule),
	},
	{
		path: 'auth',
		loadChildren: () => import('./auth').then(m => m.AuthLayoutModule),
	},
	{
		path: 'system-error',
		loadChildren: () =>
			import('./system-error').then(m => m.SystemErrorLayoutModule),
	},
	{
		path: '**',
		loadChildren: () =>
			import('./system-error/pages').then(m => m.NotFoundPageModule),
	},
];
// { path: '', redirectTo: 'home', pathMatch: 'full' },
// { path: 'p404', component: p404Component },
// { path: 'e500', component: e500Component },
// { path: 'login', component: LoginComponent },
// { path: 'register', component: RegisterComponent },
// { path: 'home', component: HomeComponent },
// { path: 'benefits', component: BenefitsComponent },
// { path: 'services', component: ServicesComponent },
// { path: 'education', component: EducationComponent },
// { path: 'products', component: ProductsComponent },
// { path: 'fcra', component: FcraComponent },
// { path: 'croa', component: CroaComponent },
// { path: 'building', component: BuildingComponent },
// { path: 'tips', component: TipsComponent },
// { path: 'maintenance', component: MaintenanceComponent }
