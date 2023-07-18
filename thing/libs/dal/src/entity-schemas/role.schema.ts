import { EntitySchema } from 'typeorm';

import { Role } from '../entities';

export const RoleSchema = new EntitySchema<Role>({
  name: 'Roles',
  tableName: 'Roles',
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
  relations: {
    resourceToPermissions: {
      type: 'many-to-many',
      target: 'ResourceToPermissions',
      joinTable: {
        name: 'RRPRelations',
        joinColumn: { name: 'RoleId' },
        inverseJoinColumn: { name: 'RpRelationId' },
      },
    },
  },
});
