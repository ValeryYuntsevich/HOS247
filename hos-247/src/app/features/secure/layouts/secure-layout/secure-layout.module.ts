// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// --- components --- //
import { SecureLayoutComponent } from './components/secure-layout.component';
// --- routing --- //
import { SecureLayoutRoutingModule } from './secure-layout-routing.module';
// --- modules --- //
import { FooterLayoutModule, HeaderLayoutModule } from '@shared/fragments';

@NgModule({
	declarations: [SecureLayoutComponent],
	imports: [
		CommonModule,
		SecureLayoutRoutingModule,
		FooterLayoutModule,
		HeaderLayoutModule,
	],
})
export class SecureLayoutModule {}
