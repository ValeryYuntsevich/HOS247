// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// --- components --- //
import { NodePageComponent } from './node-page.component';
// --- routing --- //
import { NodePageRoutingModule } from './node-page-routing.module';
// --- modules --- //
import { MaterialModule } from '@shared/imports';

@NgModule({
	declarations: [NodePageComponent],
	imports: [CommonModule, NodePageRoutingModule, MaterialModule],
})
export class NodePageModule {}
