import { ResourceToPermission } from './resource-to-permission';

export class Role {
  id: number;
  name: string;
  resourceToPermissions?: ResourceToPermission[];
}
