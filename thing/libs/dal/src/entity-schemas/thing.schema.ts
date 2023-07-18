import { EntitySchema } from 'typeorm';

import { Thing } from '../entities';

export const ThingSchema = new EntitySchema<Thing>({
  name: 'Things',
  tableName: 'Things',
  schema: 'public',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
      name: 'Id',
    },
    description: {
      type: String,
      name: 'Description',
    },
    volume: {
      type: Number,
      name: 'Volume',
    },
  },
});
