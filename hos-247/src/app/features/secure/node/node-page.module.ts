// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// --- components --- //
import { NodePageComponent } from './node-page.component';
// --- routing --- //
import { NodePageRoutingModule } from './node-page-routing.module';
// --- modules --- //
import { MaterialModule } from '@shared/imports';

import { NodesEffect } from './store/node.effect';
import { nodeReducer } from './store/node.reducer';

@NgModule({
	declarations: [NodePageComponent],
	imports: [
		CommonModule,
		NodePageRoutingModule,
		MaterialModule,
		StoreModule.forFeature('node', nodeReducer),
		EffectsModule.forFeature([NodesEffect]),
	],
})
export class NodePageModule {}
