import { ContainerSchema } from './container.schema';
import { PermissionSchema } from './permission.schema';
import { ResourceToPermissionSchema } from './resource-to-permission.schema';
import { ResourceSchema } from './resource.schema';
import { RoleSchema } from './role.schema';
import { ThingSchema } from './thing.schema';
import { UserSchema } from './user.schema';

export * from './container.schema';
export * from './permission.schema';
export * from './resource-to-permission.schema';
export * from './resource.schema';
export * from './role.schema';
export * from './thing.schema';
export * from './user.schema';

export const AllSchemas = [
  ContainerSchema,
  PermissionSchema,
  ResourceToPermissionSchema,
  ResourceSchema,
  RoleSchema,
  ThingSchema,
  UserSchema,
];
