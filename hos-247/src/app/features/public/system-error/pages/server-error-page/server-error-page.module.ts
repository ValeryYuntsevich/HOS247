// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// --- components --- //
import { ServerErrorPageComponent } from './components/server-error-page.component';
// --- routing --- //
import { ServerErrorPageRoutingModule } from './server-error-page-routing.module';
// --- modules --- //
import { TranslateUIModule, MaterialModule } from '@shared/imports';
import { ReusebleButtonModule } from '@shared/ui-kit/buttons/reuseble-button/reuseble-button.module';

@NgModule({
	declarations: [ServerErrorPageComponent],
	imports: [
		CommonModule,
		ServerErrorPageRoutingModule,
		TranslateUIModule,
		MaterialModule,
		ReusebleButtonModule,
	],
})
export class ServerErrorPageModule {}
