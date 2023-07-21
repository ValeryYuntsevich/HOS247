import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { ConfirmModalComponent } from '../modals/confirm-modal/confirm-modal.component';
import { EditModalComponent } from '../modals/edit-modal/edit-modal.component';
import { InfoModalComponent } from '../modals/info-edit/info-modal.component';

import { INode } from '../models';

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

	editDialog(data: INode): Observable<any> {
		return this.dialog
			.open(EditModalComponent, {
				data,
				width: '400px',
				disableClose: true,
			})
			.afterClosed();
	}

	infoDialog(data: INode): Observable<any> {
		return this.dialog
			.open(InfoModalComponent, {
				data,
				width: '400px',
				disableClose: true,
			})
			.afterClosed();
	}
}
