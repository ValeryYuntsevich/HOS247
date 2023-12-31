// --- node_modules --- //
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// --- providers--- //
import * as helpers from './helpers';
// --- store--- //
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {
	LOCAL_STORAGE,
	LocalStorageService,
} from './repositories/local-storage.repository';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forChild([]),
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot(),
	],
	providers: [
		{ provide: helpers.TITLE, useClass: Title },
		{ provide: helpers.META, useClass: Meta },
		{ provide: helpers.SEO, useClass: helpers.SeoService },
		{ provide: helpers.PATH_RESOLVE, useClass: helpers.PathResolveService },
		{ provide: helpers.THEMING, useClass: helpers.ThemingService },
		{ provide: LOCAL_STORAGE, useClass: LocalStorageService },
	],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only',
			);
		}
	}
}
