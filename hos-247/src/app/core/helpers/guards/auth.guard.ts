import * as core from '@angular/core';
import * as router from '@angular/router';

import { Observable } from 'rxjs';

@core.Injectable({
	providedIn: 'root',
})
export class AuthGuard
	implements router.CanLoad, router.CanActivate, router.CanActivateChild
{
	checkTokenExpiration(): boolean {
		return false || true;
	}

	canLoad(): boolean {
		return true;
	}

	canActivateChild(
		next: router.ActivatedRouteSnapshot,
		state: router.RouterStateSnapshot,
	):
		| Observable<boolean | router.UrlTree>
		| Promise<boolean | router.UrlTree>
		| boolean
		| router.UrlTree {
		return true;
	}

	public canActivate(
		next: router.ActivatedRouteSnapshot,
		state: router.RouterStateSnapshot,
	): boolean {
		const url: string = state.url;
		return true;
	}
}
