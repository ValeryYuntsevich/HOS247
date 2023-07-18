import { InjectEntityManager as typeormInjectEntityManager } from '@nestjs/typeorm';

import { CONNECTION_NAME } from '../constants';

export const InjectEntityManager = () =>
  typeormInjectEntityManager(CONNECTION_NAME);
