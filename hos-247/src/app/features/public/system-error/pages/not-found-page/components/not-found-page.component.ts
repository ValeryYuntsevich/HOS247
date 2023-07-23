import * as core from '@angular/core';
import * as router from '@angular/router';
import { Subscription, take } from 'rxjs';

import { SEO, SeoService } from '@core/helpers/providers/seo.provider';

import * as configs from '../configs';

@core.Component({
	selector: 'app-not-found-page',
	templateUrl: './not-found-page.component.html',
})
export class NotFoundPageComponent implements core.OnInit, core.OnDestroy {
	path: string | undefined = '';

	readonly config = configs.CONFIG;

	private readonly subscriptions = new Subscription();

	constructor(
		@core.Inject(SEO) private readonly seoService: SeoService,
		private readonly route: router.ActivatedRoute,
		private readonly router: router.Router,
	) {
		this.seoService.setupRouterListeners();
	}

	ngOnInit(): void {
		this.setupRouteListeners();
	}

	ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}

	onClickRedirect(): void {
		this.router.navigate(['..']);
	}

	private setupRouteListeners(): void {
		const subscription = this.route.data
			.pipe(take(1))
			.subscribe((data: router.Route) => (this.path = data.path));

		this.subscriptions.add(subscription);
	}
}
