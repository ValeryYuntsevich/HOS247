import { InjectionToken } from '@angular/core';

import { environment } from '@env';
import { IEnvironment } from '../../../../environments/models';

export const ENVIRONMENT = new InjectionToken<IEnvironment>('environment');

/**
 * Get all environment settings
 * @returns environment
 */
export function getEnvironment(): IEnvironment {
	return environment;
}
