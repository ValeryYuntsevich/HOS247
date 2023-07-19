// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// --- components --- //
import { PublicLayoutComponent } from './layout/public-layout.component';
// --- routing --- //
import { PublicLayoutRoutingModule } from './public-layout-routing.module';
// --- modules --- //
import { FooterLayoutModule, HeaderLayoutModule } from '@shared/fragments';

@NgModule({
	declarations: [PublicLayoutComponent],
	imports: [
		CommonModule,
		PublicLayoutRoutingModule,
		FooterLayoutModule,
		HeaderLayoutModule,
	],
})
export class PublicLayoutModule {}
