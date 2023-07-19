import * as core from '@angular/core';

import * as helpers from '@core/helpers';

@core.Component({
	selector: 'app-header-layout',
	templateUrl: './header-layout.component.html',
	changeDetection: core.ChangeDetectionStrategy.OnPush,
})
export class HeaderLayoutComponent {
	public isThemeDark = false;
	public isSideNavOpened = false;

	public isNavOpened = this.navigationService.getShowNav();

	public constructor(
		@core.Inject(helpers.THEMING)
		private readonly themeService: helpers.ThemingService,
		@core.Inject(helpers.NAVIGATION)
		private readonly navigationService: helpers.NavigationService,
	) {}

	public toggleDarkTheme(): void {
		this.isThemeDark = !this.isThemeDark;
		this.themeService.setDarkTheme(this.isThemeDark as boolean);
	}

	public toggleNavMenu(): void {
		this.isSideNavOpened = !this.navigationService.isNavOpen();
		this.navigationService.setShowNav(this.isSideNavOpened as boolean);
	}
}
// @core.ViewChild(MatSidenav) sidenav!: MatSidenav;

// public isThemeDark: rxjs.Observable<boolean> = this.themeService.isDarkTheme;

// private readonly subscriptions = new rxjs.Subscription();

// public constructor(
// 	@core.Inject(helpers.THEMING)
// 	private readonly themeService: helpers.ThemingService,
// 	@core.Inject(helpers.NAVIGATION)
// 	private readonly navigationService: helpers.NavigationService,
// 	private readonly observer: BreakpointObserver,
// 	private readonly router: Router,
// 	private readonly changeDetectorRef: core.ChangeDetectorRef,
// ) {}

// public ngAfterViewInit(): void {
// 	this.loadNavigationData();
// 	this.loadBreakpointData();
// 	this.loadRouterData();
// 	this.changeDetectorRef.detectChanges();
// }

// private loadNavigationData(): void {
// 	const subscription = this.navigationService
// 		.getShowNav()
// 		.pipe(
// 			rxjs.tap(isNavOpen =>
// 				isNavOpen ? this.sidenav.open() : this.sidenav.close(),
// 			),
// 		)
// 		.subscribe();

// 	this.subscriptions.add(subscription);
// }

// private loadBreakpointData(): void {
// 	const subscription = this.observer
// 		.observe(['(max-width: 800px)'])
// 		.pipe(rxjs.delay(1))
// 		.subscribe((responce: any) =>
// 			this.setSideNavMode(responce.matches as boolean),
// 		);

// 	this.subscriptions.add(subscription);
// }

// private loadRouterData(): void {
// 	const subscription = this.router.events
// 		.pipe(rxjs.filter(e => e instanceof NavigationEnd))
// 		.subscribe(() => this.checkSideNavMode());

// 	this.subscriptions.add(subscription);
// }

// private setSideNavMode(matches: boolean): void {
// 	if (matches) {
// 		this.sidenav.mode = 'over';
// 	} else {
// 		this.sidenav.mode = 'side';
// 	}
// }

// private checkSideNavMode(): void {
// 	if (this.sidenav.mode === 'over') {
// 		this.sidenav.close();
// 		this.navigationService.setShowNav(false);
// 	}
// }

// public ngOnDestroy(): void {
// 	this.subscriptions.unsubscribe();
// }
