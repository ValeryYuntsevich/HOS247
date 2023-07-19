import { Injectable, InjectionToken } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

export const NAVIGATION = new InjectionToken<any>('navigation');

/**
 * @description Navigation service to toggle navigation menu.
 */
@Injectable()
export class NavigationService {
	private showNav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
		true,
	);
	/**
	 * Set dark theme.
	 * @returns Observable<boolean>
	 */
	getShowNav(): Observable<boolean> {
		return this.showNav.asObservable();
	}
	/**
	 * Set dark theme.
	 * @param showHide The dark theme state
	 * @returns Void
	 */
	setShowNav(showHide: boolean): void {
		this.showNav.next(showHide);
	}
	/**
	 * Set dark theme.
	 * @returns Void
	 */
	toggleNavState(): void {
		this.showNav.next(!this.showNav.value);
	}
	/**
	 * Set dark theme.
	 * @returns Void
	 */
	isNavOpen(): boolean {
		return this.showNav.value;
	}
}
