import { Permission, PermissionBase } from '.';

import * as models from '@core/models';

export class UserPermission extends PermissionBase {
  public constructor() {
    super();
    this.permissions = [
      new Permission(models.Resource.Home, [
        models.PermissionType.Read,
        models.PermissionType.Other,
      ]),
    ];
  }
}
