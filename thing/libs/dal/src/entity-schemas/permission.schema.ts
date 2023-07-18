import { EntitySchema } from 'typeorm';

import { Permission } from '../entities';

export const PermissionSchema = new EntitySchema<Permission>({
  name: 'Permissions',
  tableName: 'Permissions',
  schema: 'security',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
      name: 'Id',
    },
    name: {
      type: String,
      name: 'Name',
    },
  },
});
