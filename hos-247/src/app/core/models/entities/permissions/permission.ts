import { Resource, PermissionType } from '@core/models/enums';

export class Permission {
  public resource: Resource;
  public permissions: PermissionType[];

  public constructor(resource: Resource, permissions: PermissionType[]) {
    this.resource = resource;
    this.permissions = permissions;
  }
}
