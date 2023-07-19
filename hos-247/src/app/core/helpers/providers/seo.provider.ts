import { Inject, Injectable, InjectionToken, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { filter, map, mergeMap, Subscription } from 'rxjs';

import { ISeo } from '@core/models';

import { META } from './meta.provider';
import { TITLE } from './title.provider';

export const SEO = new InjectionToken<ISeo>('seo');

/**
 * @description Seo service for application promotion.
 */
@Injectable()
export class SeoService implements ISeo, OnDestroy {
	private readonly subscriptions = new Subscription();

	public constructor(
		@Inject(TITLE) private readonly title: Title,
		@Inject(META) private readonly meta: Meta,
		private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute,
	) {}

	/**
	 * Updates Title page.
	 * @param title the title
	 * @returns Void
	 */
	public updateTitle(title: string): void {
		this.title.setTitle(title);
	}
	/**
	 * Updates Meta 'og:url' tag.
	 * @param url new url
	 * @returns Void
	 */
	public updateOgUrl(url: string): void {
		this.meta.updateTag({ name: 'og:url', content: url });
	}
	/**
	 * Updates Meta 'description' tag.
	 * @param description new description
	 * @returns Void
	 */
	public updateDescription(description: string): void {
		this.meta.updateTag({ name: 'description', content: description });
	}
	/**
	 * Updates Title page just in time.
	 * @returns Void
	 */
	public setupRouterListeners(): void {
		const subscription = this.router.events
			.pipe(
				filter(event => event instanceof NavigationEnd),
				map(() => this.activatedRoute),
				map(route => {
					while (route.firstChild) route = route.firstChild;
					return route;
				}),
				filter(route => route.outlet === 'primary'),
				mergeMap(route => route.data),
			)
			.subscribe(event => this.title.setTitle(event['title']));
		this.subscriptions.add(subscription);
	}

	public ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}
}
