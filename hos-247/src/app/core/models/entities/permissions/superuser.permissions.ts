import { Permission, PermissionBase } from '.';

import * as models from '@core/models';

export class SuperuserPermission extends PermissionBase {
  public constructor() {
    super();
    this.permissions = [
      new Permission(models.Resource.Home, [
        models.PermissionType.Create,
        models.PermissionType.Read,
        models.PermissionType.Update,
        models.PermissionType.Delete,
      ]),
    ];
  }
}
