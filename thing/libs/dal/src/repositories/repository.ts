import { Repository as typeormRepository } from 'typeorm';

import { Entity } from '../unions';

export class Repository<T extends Entity> extends typeormRepository<T> {}
