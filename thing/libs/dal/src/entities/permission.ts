import { ResourceToPermission } from './resource-to-permission';

export class Permission {
  id: number;
  name: string;
  resourceToPermissions?: ResourceToPermission[];
}
