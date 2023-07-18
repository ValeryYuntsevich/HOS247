import { EntitySchema } from 'typeorm';

import { User } from '../entities';

export const UserSchema = new EntitySchema<User>({
  name: 'Users',
  tableName: 'Users',
  schema: 'security',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
      name: 'Id',
    },
    username: {
      type: String,
      length: 250,
      name: 'Username',
      unique: true,
    },
    password: {
      type: String,
      length: 250,
      name: 'Password',
    },
  },
  relations: {
    role: {
      type: 'many-to-one',
      target: 'Roles',
      joinColumn: { name: 'RoleId' },
      nullable: false,
    },
  },
});
