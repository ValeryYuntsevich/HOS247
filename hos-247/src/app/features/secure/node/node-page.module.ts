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
import { EditModalComponent } from './modals/edit-modal/edit-modal.component';
import { InfoModalComponent } from './modals/info-modal/info-modal.component';
import { AddModalComponent } from './modals/add-modal/add-modal.component';

import { DialogService } from './services/dialog.service';

@NgModule({
	declarations: [
		NodePageComponent,
		ConfirmModalComponent,
		EditModalComponent,
		InfoModalComponent,
		AddModalComponent,
	],
	imports: [
		CommonModule,
		NodePageRoutingModule,
		MaterialModule,
		ReactiveFormsModule,
		StoreModule.forFeature('node', nodeReducer),
		EffectsModule.forFeature([NodesEffect]),
	],
	providers: [DialogService],
})
export class NodePageModule {}
