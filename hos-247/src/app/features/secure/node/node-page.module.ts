// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
// --- components --- //
import { NodePageComponent } from './node-page.component';
// --- routing --- //
import { NodePageRoutingModule } from './node-page-routing.module';
// --- modules --- //
import { MaterialModule } from '@shared/imports';

import { NodesEffect } from './store/node.effect';
import { nodeReducer } from './store/node.reducer';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';
import { UpdateModalComponent } from './modals/update-modal/update-modal.component';
import { InfoModalComponent } from './modals/info-modal/info-modal.component';
import { AddNewNodeModalComponent } from './modals/add-new-node-modal/add-new-node-modal.component';
import { AddNodeModalComponent } from './modals/add-node-modal/add-node-modal.component';

import { DialogService } from './services/dialog.service';
import { NodesRepository } from './services/nodes.repository';
import { NodeConfigRepository } from './services/node-config.repository';

@NgModule({
	declarations: [
		NodePageComponent,
		ConfirmModalComponent,
		UpdateModalComponent,
		InfoModalComponent,
		AddNewNodeModalComponent,
		AddNodeModalComponent,
	],
	imports: [
		CommonModule,
		NodePageRoutingModule,
		MaterialModule,
		ReactiveFormsModule,
		StoreModule.forFeature('node', nodeReducer),
		EffectsModule.forFeature([NodesEffect]),
	],
	providers: [NodesRepository, NodeConfigRepository, DialogService],
})
export class NodePageModule {}
