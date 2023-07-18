import { InjectRepository as typeormInjectRepository } from '@nestjs/typeorm';

import { EntitySchema } from '../unions';
import { CONNECTION_NAME } from '../constants';

export const InjectRepository = (entitySchema: EntitySchema) =>
  typeormInjectRepository(entitySchema, CONNECTION_NAME);
