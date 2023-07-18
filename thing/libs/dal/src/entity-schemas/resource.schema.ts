import { EntitySchema } from 'typeorm';

import { Resource } from '../entities';

export const ResourceSchema = new EntitySchema<Resource>({
  name: 'Resources',
  tableName: 'Resources',
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
