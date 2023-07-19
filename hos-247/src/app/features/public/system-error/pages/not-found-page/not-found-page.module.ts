// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// --- components --- //
import { NotFoundPageComponent } from './components/not-found-page.component';
// --- routing --- //
import { NotFoundPageRoutingModule } from './not-found-page-routing.module';
// --- modules --- //
import { MaterialModule, TranslateUIModule } from '@shared/imports';
import { ReusebleButtonModule } from '@shared/ui-kit/buttons/reuseble-button/reuseble-button.module';

@NgModule({
	declarations: [NotFoundPageComponent],
	imports: [
		CommonModule,
		NotFoundPageRoutingModule,
		TranslateUIModule,
		MaterialModule,
		ReusebleButtonModule,
	],
})
export class NotFoundPageModule {}
