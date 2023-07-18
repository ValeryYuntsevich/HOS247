import { Permission } from './permission';
import { Resource } from './resource';
import { Role } from './role';

export class ResourceToPermission {
  id: number;
  resource: Resource;
  permission: Permission;
  roles?: Role[];
}
