import { Permission } from '@core/models';

export abstract class PermissionBase {
  public permissions: Permission[];

  public constructor() {}
}
