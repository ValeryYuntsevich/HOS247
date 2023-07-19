import { Permission, PermissionBase } from '.';

import * as models from '@core/models';

export class UnknownPermission extends PermissionBase {
  public constructor() {
    super();
    this.permissions = [new Permission(models.Resource.Home, [])];
  }
}
