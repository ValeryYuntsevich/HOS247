import { ResourceToPermission } from './resource-to-permission';

export class Resource {
  id: number;
  name: string;
  resourceToPermissions?: ResourceToPermission[];
}
