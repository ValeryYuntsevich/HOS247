import { Inject, Injectable } from '@angular/core';

import { ENVIRONMENT } from '@core/helpers/providers/environment.provider';
import { IEnvironment } from '../../../environments/models';

// Source: https://nils-mehlhorn.de/posts/angular-environment-setup-testing

/**
 * @description Environment service for getting environment settings.
 */
@Injectable({
	providedIn: 'root',
})
export class EnvironmentRepository implements IEnvironment {
	private constructor(
		@Inject(ENVIRONMENT) private readonly environment: IEnvironment,
	) {}

	/**
	 * Get production mode
	 * @returns boolean
	 */
	public get production(): boolean {
		return this.environment.production;
	}
	/**
	 * Get current api url
	 * @returns string
	 */
	public get baseUrl(): string {
		return this.environment.baseUrl;
	}
}
