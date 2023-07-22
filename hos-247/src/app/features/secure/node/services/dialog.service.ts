import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { ConfirmModalComponent } from '../modals/confirm-modal/confirm-modal.component';
import { UpdateModalComponent } from '../modals/update-modal/update-modal.component';
import { InfoModalComponent } from '../modals/info-modal/info-modal.component';
import { AddModalComponent } from '../modals/add-modal/add-modal.component';

import { IAddFormData, INode, IUpdatedNode } from '../models';

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

	addDialog(): Observable<IAddFormData> {
		return this.dialog
			.open(AddModalComponent, {
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
