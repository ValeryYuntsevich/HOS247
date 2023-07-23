import * as core from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import * as core_helpers from '@core/helpers';
import * as core_models from '@core/models';

import { PrivacyPolicyModalComponent } from '../modals/privacy-policy-modal/privacy-policy-modal.component';

@core.Component({
	selector: 'app-footer-layout',
	templateUrl: './footer-layout.component.html',
	changeDetection: core.ChangeDetectionStrategy.OnPush,
})
export class FooterLayoutComponent {
	public copyrightYear = core_helpers.CopyrightYear.getCopyrightYear();

	readonly internalUrls = core_models.InternalUrls;

	constructor(private readonly dialog: MatDialog) {}

	openOrivacyPoliceDialog(): void {
		this.dialog
			.open(PrivacyPolicyModalComponent, {
				width: '400px',
				disableClose: true,
			})
			.afterClosed();
	}
}
