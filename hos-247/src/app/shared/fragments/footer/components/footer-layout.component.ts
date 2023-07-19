import * as core from '@angular/core';

import * as core_helpers from '@core/helpers';
import * as core_models from '@core/models';

@core.Component({
	selector: 'app-footer-layout',
	templateUrl: './footer-layout.component.html',
	changeDetection: core.ChangeDetectionStrategy.OnPush,
})
export class FooterLayoutComponent {
	public copyrightYear = core_helpers.CopyrightYear.getCopyrightYear();

	readonly internalUrls = core_models.InternalUrls;
}
