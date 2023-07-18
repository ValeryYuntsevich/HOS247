import {
  Container,
  Permission,
  ResourceToPermission,
  Resource,
  Role,
  Thing,
  User,
} from '../entities';

export declare type Entity =
  | Container
  | Permission
  | ResourceToPermission
  | Resource
  | Role
  | Thing
  | User;
