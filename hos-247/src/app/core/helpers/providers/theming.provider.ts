import { Injectable, InjectionToken } from '@angular/core';

import { Subject } from 'rxjs';

export const THEMING = new InjectionToken<any>('theming');

/**
 * @description Theming service to toggle the app theme.
 */
@Injectable()
export class ThemingService {
	private darkTheme = new Subject<boolean>();

	public isDarkTheme = this.darkTheme.asObservable();
	/**
	 * Set dark theme.
	 * @param isDarkTheme The dark theme state
	 * @returns Void
	 */
	public setDarkTheme(isDarkTheme: boolean): void {
		this.darkTheme.next(isDarkTheme);
	}
}

// Example:
// https://zoaibkhan.com/blog/angular-material-dark-mode-in-3-steps/

// UI template:
// <mat-slide-toggle [formControl]="toggleControl" class="mr-8"></mat-slide-toggle>

// UI logic:
// toggleControl = new FormControl(false);
// @HostBinding('class') className = '';

// constructor(private dialog: MatDialog, private overlay: OverlayContainer) { }

// public ngOnInit(): void {
// 	this.setupDarkThemeListeners();
// }

// private setupDarkThemeListeners(): void {
// 	const subscription = this.toggleControl.valueChanges.subscribe(darkMode =>
// 		this.themeService.setDarkTheme(darkMode as boolean),
// 	);

// 	this.subscriptions.add(subscription);
// }

// public ngOnDestroy(): void {
// 	this.subscriptions.unsubscribe();
// }

// this.toggleControl.valueChanges.subscribe((darkMode) => {
//   const darkClassName = 'darkMode';
//   this.className = darkMode ? darkClassName : '';
//   if (darkMode) {
//     this.overlay.getContainerElement().classList.add(darkClassName);
//   } else {
//     this.overlay.getContainerElement().classList.remove(darkClassName);
//   }
// });
