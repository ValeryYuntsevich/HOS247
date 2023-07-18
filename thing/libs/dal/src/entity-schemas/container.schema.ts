import { EntitySchema } from 'typeorm';

import { Container } from '../entities';

export const ContainerSchema = new EntitySchema<Container>({
  name: 'Containers',
  tableName: 'Containers',
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
