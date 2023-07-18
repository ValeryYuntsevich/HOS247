import { EntitySchema as typeormEntitySchema } from 'typeorm';

import { Entity } from './entity';

export declare type EntitySchema = typeormEntitySchema<Entity>;
