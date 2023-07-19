// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// --- components --- //
import { SystemErrorLayoutComponent as SystemErrorLayoutComponent } from './layout/system-error-layout.component';
// --- routing --- //
import { SystemErrorLayoutRoutingModule } from './system-error-layout-routing.module';

@NgModule({
	declarations: [SystemErrorLayoutComponent],
	imports: [CommonModule, SystemErrorLayoutRoutingModule],
})
export class SystemErrorLayoutModule {}
