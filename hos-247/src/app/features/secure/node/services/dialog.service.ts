import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { ConfirmModalComponent } from '../modals/confirm-modal/confirm-modal.component';
import { UpdateModalComponent } from '../modals/update-modal/update-modal.component';
import { InfoModalComponent } from '../modals/info-modal/info-modal.component';
import { AddNewNodeModalComponent } from '../modals/add-new-node-modal/add-new-node-modal.component';
import { AddNodeModalComponent } from '../modals/add-node-modal/add-node-modal.component';

import { INewNode, INode, INodeFormData, IUpdatedNode } from '../models';

@Injectable()
export class DialogService {
	constructor(private readonly dialog: MatDialog) {}

	confirmDialog(): Observable<boolean> {
		return this.dialog
			.open(ConfirmModalComponent, {
				width: '400px',
				disableClose: true,
			})
			.afterClosed();
	}

	updateDialog(data: INode): Observable<IUpdatedNode> {
		return this.dialog
			.open(UpdateModalComponent, {
				data,
				width: '400px',
				disableClose: true,
			})
			.afterClosed();
	}

	addDialog(
		id: number,
		nodes: INode[],
		title: string,
	): Observable<INodeFormData[]> {
		return this.dialog
			.open(AddNodeModalComponent, {
				data: { id, nodes, title },
				minWidth: '400px',
				disableClose: true,
			})
			.afterClosed();
	}

	addNewDialog(): Observable<INewNode> {
		return this.dialog
			.open(AddNewNodeModalComponent, {
				width: '400px',
				disableClose: true,
			})
			.afterClosed();
	}

	infoDialog(data: INode): Observable<void> {
		return this.dialog
			.open(InfoModalComponent, {
				data,
				width: '400px',
				disableClose: true,
			})
			.afterClosed();
	}
}
