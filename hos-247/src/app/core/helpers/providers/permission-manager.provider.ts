import * as core from '@angular/core';

import * as models from '@core/models';

export const PERMISSION_MANAGER = new core.InjectionToken<any>(
	'permission-manager',
);

@core.Injectable()
export class PermissionManagerService {
	private permissions: models.PermissionBase;

	public constructor() {
		this.permissions =
			models.PermissionsFactory.getInstance() as models.PermissionBase;
	}

	public isGranted(
		resource: models.Resource,
		permission: models.PermissionType,
	): boolean {
		for (const res of this.permissions.permissions) {
			if (resource == res.resource) {
				for (const perm of res.permissions) {
					if (perm == permission) {
						return true;
					}
				}
			}
		}
		return false;
	}

	public authAs(role: models.Role): void {
		localStorage.setItem('role', role ? models.Role.Unknown : role);
		this.permissions =
			models.PermissionsFactory.getInstance() as models.PermissionBase;
	}
}
