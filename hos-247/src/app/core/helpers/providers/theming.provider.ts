import { Injectable, InjectionToken } from '@angular/core';

import { Subject } from 'rxjs';

export const THEMING = new InjectionToken<unknown>('theming');

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
