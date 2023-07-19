import { Role } from '@core/models';

import * as permission from '.';

export class PermissionsFactory {
  public static instance: permission.PermissionBase;
  public constructor() {}

  public static getInstance(): permission.PermissionBase | void {
    if (this.instance) {
      return this.instance;
    } else {
      const role = localStorage.getItem('role');
      switch (role) {
        case Role.Superuser:
          this.instance = new permission.SuperuserPermission();
          break;
        case Role.Admin:
          // this.instance = new permission.AdminPermission();
          break;
        case Role.User:
          this.instance = new permission.UserPermission();
          break;
        case Role.Unknown:
          this.instance = new permission.UnknownPermission();
          break;
        default:
          this.instance = new permission.UnknownPermission();
          break;
      }
    }
  }
}
