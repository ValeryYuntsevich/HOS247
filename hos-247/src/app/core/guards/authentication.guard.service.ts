import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserAuthConfigRepository } from '@core/repositories/user-auth-config.repository';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
	constructor(
		private readonly router: Router,
		private readonly userAuthConfigRepository: UserAuthConfigRepository,
	) {}

	canActivate(): boolean {
		const token = this.userAuthConfigRepository.getConfig()?.token || null;
		if (!token) {
			this.router.navigate(['**'], { skipLocationChange: true });
			return false;
		}
		return true;
	}
}
