import * as core from '@angular/core';
import * as router_1 from '@angular/router';

import { SEO, SeoService } from '@core/helpers';
import { InternalUrls } from '@core/models';

import * as configs from '../configs';
@core.Component({
	selector: 'app-server-error-page',
	templateUrl: './server-error-page.component.html',
})
export class ServerErrorPageComponent {
	readonly config = configs.CONFIG;

	public constructor(
		@core.Inject(SEO) private readonly seoService: SeoService,
		private readonly router: router_1.Router,
	) {
		this.seoService.setupRouterListeners();
	}

	public onClickRedirect(): void {
		this.router.navigate([InternalUrls.Base]);
	}
}
