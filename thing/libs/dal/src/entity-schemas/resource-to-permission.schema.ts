import { EntitySchema } from 'typeorm';

import { ResourceToPermission } from '../entities';

export const ResourceToPermissionSchema =
  new EntitySchema<ResourceToPermission>({
    name: 'ResourceToPermissions',
    tableName: 'ResourceToPermissions',
    schema: 'security',
    columns: {
      id: {
        type: Number,
        primary: true,
        generated: true,
        name: 'Id',
      },
    },
    relations: {
      resource: {
        type: 'many-to-one',
        target: 'Resources',
        joinColumn: { name: 'ResourceId' },
        nullable: false,
      },
      permission: {
        type: 'many-to-one',
        target: 'Permissions',
        joinColumn: { name: 'PermissionId' },
        nullable: false,
      },
    },
  });
